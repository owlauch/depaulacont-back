FROM node:14.15.3-alpine

WORKDIR /usr/app
COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]
