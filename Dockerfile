# Etapa de construcción
FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

# Etapa de producción
FROM ubuntu
RUN apt-get update && apt-get install -y nginx

# Copiar archivo de configuración personalizado de NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos estáticos generados
COPY --from=build /app/dist /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]