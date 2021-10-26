FROM node:14.17.3-buster

WORKDIR /backend

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 4000

CMD npm start