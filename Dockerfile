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

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built application from cleaner stage
COPY --from=cleaner /app/out /usr/share/nginx/html

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Set proper permissions
RUN chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]