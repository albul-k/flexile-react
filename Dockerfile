FROM node:16.4.2-alpine
LABEL "repository"="https://github.com/albul-k/flexile-react"
LABEL "maintainer"="Konstantin Albul"

WORKDIR /usr/src/flexile-react

COPY src/ src/
COPY public/ public/
COPY yarn.lock package-lock.json package.json ./
COPY server/app.js .

RUN yarn install
RUN yarn run build

EXPOSE 8080

CMD ["node","app.js"]