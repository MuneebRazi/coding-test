FROM node:16-alpine3.15

ENV NODE_ENV=test

RUN apk add --update \
  git \
  make \
  g++ \
  jpeg-dev \
  # cario-dev \
  giflib-dev \
  pango-dev \
  bash

WORKDIR /usr/src/

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
