FROM node:19.3.0-alpine3.17

RUN apk add tzdata curl && \
    ln -s /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    rm -rf /var/cache/apk/*

WORKDIR /opt/anotherapp

ADD ./src/ /opt/anotherapp

RUN npm i

EXPOSE 8080