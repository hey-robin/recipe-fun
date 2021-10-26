FROM node:14.17.3-buster

WORKDIR /frontend

COPY package.json package.json

RUN yarn

COPY . .

CMD ["yarn", "run", "start"]