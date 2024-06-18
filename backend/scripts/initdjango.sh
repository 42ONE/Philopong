# #!/bin/bash

# Wait for the PostgreSQL database to be ready
until pg_isready -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME"; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

echo "PostgreSQL is up - executing command"

# Apply database migrations
python manage.py migrate

exec "$@"
