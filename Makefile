# Makefile for managing Docker Compose

# Project name
PROJECT_NAME = ft_transcendence

# Docker Compose file
DOCKER_COMPOSE_FILE = docker-compose.yml

# ANSI color codes
COLOR_RESET = \033[0m
COLOR_YELLOW = \033[33m
COLOR_CYAN = \033[36m
COLOR_GREEN = \033[32m

# Default target
.PHONY: all
all: help

# Show help
.PHONY: help
help:
	@echo "$(COLOR_YELLOW)Usage:$(COLOR_RESET)"
	@echo "  $(COLOR_CYAN)make build$(COLOR_RESET)      - Build all services"
	@echo "  $(COLOR_CYAN)make up$(COLOR_RESET)         - Start all services"
	@echo "  $(COLOR_CYAN)make down$(COLOR_RESET)       - Stop all services"
	@echo "  $(COLOR_CYAN)make restart$(COLOR_RESET)    - Restart all services"
	@echo "  $(COLOR_CYAN)make logs$(COLOR_RESET)       - View logs of all services"
	@echo "  $(COLOR_CYAN)make ps$(COLOR_RESET)         - List containers"
	@echo "  $(COLOR_CYAN)make test$(COLOR_RESET)       - Run tests"
	@echo "  $(COLOR_CYAN)make clean$(COLOR_RESET)      - Remove all containers and networks"
	@echo "  $(COLOR_CYAN)make help$(COLOR_RESET)       - Show this help message"

# Build all services
.PHONY: build
build:
	docker-compose -f $(DOCKER_COMPOSE_FILE) build

# Start all services
.PHONY: up
up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

# Stop all services
.PHONY: down
down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down --rmi all

# Restart all services
.PHONY: restart
restart: down up

# View logs of all services
.PHONY: logs
logs:
	docker-compose -f $(DOCKER_COMPOSE_FILE) logs -f

# List containers
.PHONY: ps
ps:
	docker-compose -f $(DOCKER_COMPOSE_FILE) ps

# Run tests
.PHONY: test
test: up
	# Wait for services to be up and running
	@sleep 10
	# Add your test commands here, for example:
	@echo -e "$(COLOR_GREEN)Running tests...$(COLOR_RESET)"
	# Example: docker-compose -f $(DOCKER_COMPOSE_FILE) exec web python manage.py test
	# Add actual test commands here
	@echo -e "$(COLOR_GREEN)Tests completed.$(COLOR_RESET)"

# Clean up all containers and networks
.PHONY: clean
clean:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down -v
	docker system prune -f
