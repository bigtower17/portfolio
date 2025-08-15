#!/bin/bash

echo "🔧 Fix SSL per torregrossa.dev"
echo "================================"

# Controlla se siamo root
if [ "$EUID" -ne 0 ]; then 
   echo "❌ Esegui questo script come root (sudo ./fix-ssl.sh)"
   exit 1
fi

echo "📦 Installazione certbot se necessario..."
if ! command -v certbot &> /dev/null; then
    apt-get update
    apt-get install -y certbot
fi

echo "🛑 Fermando il container Docker..."
docker stop torregrossa-app 2>/dev/null || true

echo "🔒 Generazione certificato SSL..."
certbot certonly --standalone \
    -d torregrossa.dev \
    -d www.torregrossa.dev \
    --email hello@torregrossa.dev \
    --agree-tos \
    --non-interactive

if [ ! -d "/etc/letsencrypt/live/torregrossa.dev" ]; then
    echo "❌ Generazione certificato fallita!"
    exit 1
fi

echo "✅ Certificato SSL generato con successo!"

echo "🐳 Riavvio container con SSL..."
docker rm torregrossa-app 2>/dev/null || true

# Avvia container con volumi SSL
docker run -d \
    --name torregrossa-app \
    --restart unless-stopped \
    -p 80:80 \
    -p 443:443 \
    -v /etc/letsencrypt/live/torregrossa.dev/fullchain.pem:/etc/nginx/ssl/fullchain.pem:ro \
    -v /etc/letsencrypt/live/torregrossa.dev/privkey.pem:/etc/nginx/ssl/privkey.pem:ro \
    --memory="512m" \
    --memory-swap="1g" \
    torregrossa-portfolio:latest

# Aspetta che il container si avvii
sleep 5

# Copia la configurazione SSL
docker exec torregrossa-app sh -c "cat > /etc/nginx/nginx.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log warn;

    # Performance
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json image/svg+xml;

    # Redirect HTTP to HTTPS
    server {
        listen 80;
        server_name torregrossa.dev www.torregrossa.dev;
        return 301 https://\$server_name\$request_uri;
    }

    # HTTPS server
    server {
        listen 443 ssl http2;
        server_name torregrossa.dev www.torregrossa.dev;

        ssl_certificate /etc/nginx/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/ssl/privkey.pem;

        # SSL configuration
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        root /usr/share/nginx/html;
        index index.html;

        # Security headers
        add_header X-Frame-Options \"SAMEORIGIN\" always;
        add_header X-XSS-Protection \"1; mode=block\" always;
        add_header X-Content-Type-Options \"nosniff\" always;
        add_header Referrer-Policy \"no-referrer-when-downgrade\" always;

        # Handle client-side routing
        location / {
            try_files \$uri \$uri/ \$uri.html /index.html;
        }

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)\$ {
            expires 1y;
            add_header Cache-Control \"public, immutable\";
        }

        # Security
        location ~ /\. {
            deny all;
        }
    }
}
EOF"

# Ricarica nginx
docker exec torregrossa-app nginx -s reload

echo "✅ Configurazione SSL completata!"

# Test
echo "🔍 Test della configurazione..."
sleep 2

if curl -k -I https://torregrossa.dev 2>/dev/null | grep -q "200 OK"; then
    echo "✅ HTTPS funzionante!"
    echo "🌐 Il tuo sito è ora accessibile su https://torregrossa.dev"
else
    echo "⚠️  HTTPS potrebbe non essere ancora pronto. Controlla tra qualche secondo."
fi

# Setup auto-renewal
echo "⏰ Configurazione auto-rinnovo certificato..."
(crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --post-hook 'docker restart torregrossa-app'") | crontab -

echo "✅ Script completato!"
echo ""
echo "📝 Comandi utili:"
echo "  docker logs torregrossa-app     # Vedi i log"
echo "  docker restart torregrossa-app  # Riavvia il container"
echo "  certbot certificates            # Controlla i certificati"