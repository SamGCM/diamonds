FROM node:latest as angular
ENV NG_APP_API_KEY_TMDB=ec847a17d297145c1b3b793e843cc338
ENV NG_APP_API_TOKEN_TMDB=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzg0N2ExN2QyOTcxNDVjMWIzYjc5M2U4NDNjYzMzOCIsInN1YiI6IjY0ZTU3NzNiZTBjYTdmMDBjNjY1YzhiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrkrfES595Ffy44cmxxTjWAWVj5JdyoWS98YFTkCNzY
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/projeto-5 /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

