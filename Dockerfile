FROM node:14.15.3-alpine

WORKDIR /usr/app
COPY package.json ./

RUN npm i
RUN npm build

COPY ./dist .

EXPOSE 3000

CMD [ "node","main.js" ]
