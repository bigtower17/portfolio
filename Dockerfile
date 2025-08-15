# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit

# Copy source code
COPY . .

# Set environment variable for build - reduced for low memory VPS
ENV NODE_OPTIONS="--max-old-space-size=512"
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

# Build the application with memory optimization
RUN npm run build

# Verify build output
RUN if [ ! -d "out" ]; then echo "❌ Build failed - no 'out' directory found" && exit 1; fi

# Cleaner stage to reduce image size
FROM node:18-alpine AS cleaner

WORKDIR /app

# Copy only the built output
COPY --from=builder /app/out ./out

# Verify the build output contains essential files
RUN ls -la out/ && echo "✅ Build verification complete"

# Production stage
FROM nginx:alpine

# Install wget for health checks
RUN apk add --no-cache wget

# Copy built app
COPY --from=cleaner /app/out /usr/share/nginx/html

# Copy nginx configurations
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-ssl.conf /usr/share/nginx/html/nginx-ssl.conf

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

# Test nginx configuration (only the default HTTP config during build)
RUN nginx -t

# Expose ports
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]