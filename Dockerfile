# Сборка фронтенд-приложения
FROM node:14 as build

# Создайте рабочую директорию
WORKDIR /app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте остальные файлы и постройте приложение
COPY . ./
RUN npm run build

# Используйте образ Nginx для развертывания
FROM nginx:alpine

# Скопируйте собранное приложение в директорию, обслуживаемую Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Скопируйте конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Экспонируйте порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
