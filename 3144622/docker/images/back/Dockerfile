FROM node:lts-alpine as builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npx tsc

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/dist/server.js .
COPY --from=builder /app/node_modules ./node_modules

CMD [ "node", "server.js" ]