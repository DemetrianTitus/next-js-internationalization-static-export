# Use lightweight Nginx image with fewer vulnerabilities
FROM nginx:1.27.5-alpine-slim

# Copy the static build output to Nginx's serve directory
COPY out/ /usr/share/nginx/html

# Copy custom Nginx config (we'll create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 4400
EXPOSE 4400

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
