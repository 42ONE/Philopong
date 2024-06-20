# Use an official nginx image to serve static files
FROM nginx:alpine

# Install openssl
RUN apk add openssl

# Create SSL files
RUN mkdir -p /ssl_files && \
    openssl req \
    -newkey rsa:2048 -nodes -keyout /ssl_files/my_ssl.key \
    -x509 -days 365 -out /ssl_files/my_ssl.crt \
    -subj "/C=KO/ST=Seoul/L=Gaepo/O=42Seoul/OU=hyuim/CN=localhost"

# Copy nginx config file
COPY ./config/nginx.conf /etc/nginx/nginx.conf

# Expose port 443
EXPOSE 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
