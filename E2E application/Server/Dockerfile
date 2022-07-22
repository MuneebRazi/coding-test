FROM node:16.10.0-alpine3.14
ENV NODE_ENV=test

WORKDIR /home/node

COPY ./package* ./

RUN apk add --update \
    python3 \
    python3-dev \
    py3-pip \
    build-base

RUN npm install -g npm@7.24.1

RUN npm install && \
    npm cache clean --force && \
    rm -rf /var/cache/apk/* && \
    npm install -g nodemon

COPY ./ ./

EXPOSE 8080

CMD nodemon -L ./index.js
