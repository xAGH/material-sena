FROM node:24.14-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "./dist/server.js" ]