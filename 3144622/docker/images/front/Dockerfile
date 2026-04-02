FROM node:lts-alpine as build

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build


FROM nginx:alpine as runner

COPY --from=build /app/dist/front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
