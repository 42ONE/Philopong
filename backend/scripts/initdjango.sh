# #!/bin/bash

# Wait for the PostgreSQL database to be ready
until psql -h DB_HOST -U DB_USER -d DB_NAME -c '\q'; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

echo "PostgreSQL is up - executing command"

# Apply database migrations
python manage.py migrate

# Execute the command passed to the script
python manage.py runserver 0.0.0.0:8000
