FROM node:14

WORKDIR /app

RUN npm i -g  serve

COPY ./frontend/package*.json ./

RUN npm ci

COPY ./frontend .

RUN npm run build

EXPOSE 5000

CMD serve -s public
