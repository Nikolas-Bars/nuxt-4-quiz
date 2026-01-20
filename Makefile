PROFILE ?= local
NETWORK_NAME ?= shared_network
SERVICE_PREFIX ?= admin-front

.PHONY: start down up rebuild rebuild-no-cache network

start: network
	@docker-compose --profile ${PROFILE} build
	@docker-compose --profile ${PROFILE} up -d

# Остановка и удаление контейнеров
down:
	@docker-compose --profile ${PROFILE} down

# Запуск контейнеров без пересборки
up:
	@docker-compose --profile ${PROFILE} up -d

# Полная пересборка
rebuild: down
	@docker-compose --profile ${PROFILE} build
	@docker-compose --profile ${PROFILE} up -d

# Пересборка без кэша
rebuild-no-cache: down
	@docker-compose --profile ${PROFILE} build --no-cache
	@docker-compose --profile ${PROFILE} up -d

# Создание сети
network:
	@if [ -z "$$(docker network ls -q --filter name=${NETWORK_NAME})" ]; then \
		docker network create ${NETWORK_NAME}; \
		echo "🌐 Network ${NETWORK_NAME} created"; \
	else \
		echo "🔌 Network ${NETWORK_NAME} already exists"; \
	fi