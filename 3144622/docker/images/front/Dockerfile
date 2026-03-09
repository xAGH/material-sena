FROM node:lts-alpine as build

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build


FROM nginx:alpine as runner

COPY --from=build /app/dist/front/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
