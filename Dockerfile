FROM node:alpine
WORKDIR '/app'
COPY /opt/myapp/package*.json ./
RUN npm install
COPY . .
RUN npm run start
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
