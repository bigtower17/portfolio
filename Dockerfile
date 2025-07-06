# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci --prefer-offline --no-audit

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Verification stage - ensure build was successful
RUN if [ ! -d "out" ]; then echo "❌ Build failed - no 'out' directory found" && exit 1; fi

# Cleanup stage - remove unnecessary files after build
FROM node:18-alpine AS cleaner

WORKDIR /app

# Copy only the built output
COPY --from=builder /app/out ./out

# Verify out directory contents
RUN ls -la out/ && echo "✅ Build verification complete"

# Production stage
FROM nginx:alpine

# Install wget for health checks
RUN apk add --no-cache wget

# Copy built application from cleaner stage first
COPY --from=cleaner /app/out /usr/share/nginx/html

# Copy custom nginx config after copying files
COPY nginx.conf /etc/nginx/nginx.conf

# Fix permissions for all nginx files
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

# Test nginx configuration
RUN nginx -t

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx in foreground with error logging
CMD ["sh", "-c", "nginx -g 'daemon off; error_log /dev/stderr info;'"]