# # Stage 1: Build the React app
# FROM node:14 as build
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# # Stage 2: Serve the app with nginx
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
