ARG NODE_VERSION=23.7.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

USER node

COPY . .

EXPOSE 8000

CMD npm start
