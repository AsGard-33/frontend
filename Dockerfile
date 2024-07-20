# Сборка фронтенд-приложения
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Копируем SSL сертификаты
COPY /etc/letsencrypt /etc/letsencrypt

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
