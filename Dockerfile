FROM node:lts

WORKDIR /var/www/html/app/

COPY package*.json ./

COPY . /app

RUN yarn install

CMD [ "yarn", "dev"]

EXPOSE 3000