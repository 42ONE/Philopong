# Use an official nginx image to serve static files
FROM nginx:alpine

# Copy static files
# COPY . /usr/share/nginx
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80