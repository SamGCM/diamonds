FROM node:latest as angular
ENV NG_APP_API_KEY_TMDB=
ENV NG_APP_API_TOKEN_TMDB=
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/projeto-5 /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

