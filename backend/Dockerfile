# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/
RUN chmod +x /app/scripts/initdjango.sh

RUN mkdir -p /ssl_files && \
    openssl req \
    -newkey rsa:2048 -nodes -keyout /ssl_files/my_ssl.key \
    -x509 -days 365 -out /ssl_files/my_ssl.crt \
    -subj "/C=KO/ST=Seoul/L=Gaepo/O=42Seoul/OU=hyuim/CN=localhost"

RUN apt-get update && apt-get install -y postgresql-client \
    dumb-init \
    procps

RUN pip install psycopg2-binary
RUN pip install requests requests-oauthlib
RUN pip install django-cors-headers



ENTRYPOINT ["/usr/bin/dumb-init", "--", "/app/scripts/initdjango.sh"]

CMD ["python", "manage.py", "runsslserver", "--certificate", "/ssl_files/my_ssl.crt", "--key", "/ssl_files/my_ssl.key", "0.0.0.0:8000"]
