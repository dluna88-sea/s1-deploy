# Dockerfile

# Usar una imagen base de Node.js
FROM node:14

# Configuración del directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
