FROM node:20-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
ENV HOST=0.0.0.0

FROM node:20-alpine AS local
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
WORKDIR /var/www/site-dev
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
EXPOSE 5173
CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "5173"]

FROM base AS builder
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY . .
COPY .env.${NODE_ENV} .env
RUN yarn build --mode ${NODE_ENV} --verbose
RUN yarn cache clean

FROM node:20-alpine AS production
WORKDIR /app

# Оптимизация окружения Node.js
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096 --max-http-header-size=16384"

# Копирование только необходимых файлов
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app/

# Настройка системных лимитов
ENV UV_THREADPOOL_SIZE=64

# Установка timezone
ENV TZ=Europe/Moscow

# Порт приложения
EXPOSE 3000

# Запуск с оптимизированными настройками
CMD ["node", "--expose-gc", "/app/.output/server/index.mjs"]
