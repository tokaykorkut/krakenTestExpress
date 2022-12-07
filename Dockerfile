FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "node", "--experimental-modules", "--es-module-specifier-resolution=node","src/app.js" ]
