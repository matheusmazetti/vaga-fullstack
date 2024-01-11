FROM node:alpine AS build

#cria a pasta onde o app será colocado
WORKDIR /client

#copia o package.json para a nova pasta
COPY package.json .

#instala as dependencias
RUN npm i 

#copia os arquivos para a pasta do app
COPY . .

#builda o app
RUN npm run build

#Criação da imagem do nginx
FROM nginx

#copia os arquivos de build para a pasta do nginx
COPY --from=build /client/build usr/share/nginx/html