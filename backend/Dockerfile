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

RUN apt-get update && apt-get install -y postgresql-client \
    dumb-init 
RUN pip install psycopg2-binary

# RUN python manage.py migrate
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["sh", "/app/scripts/initdjango.sh"]