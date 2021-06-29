FROM node:latest
LABEL "repository"="https://github.com/albul-k/flexile-react"
LABEL "maintainer"="Konstantin Albul"

EXPOSE 3000

WORKDIR /usr/src/flexile-react

COPY . .

RUN yarn install

RUN yarn run build

CMD ["node","server.js"]