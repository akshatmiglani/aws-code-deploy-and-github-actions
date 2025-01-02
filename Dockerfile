FROM node:20 as build

WORKDIR /application

COPY application/package*.json ./

RUN npm install && npm cache clean --force

COPY application/ ./

RUN npm run build

FROM nginx

COPY --from=build /application/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
