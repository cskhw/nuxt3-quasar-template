FROM node:lts

WORKDIR /var/www/html/app/

COPY package*.json ./

COPY . /app

RUN npm install --production

CMD [ "npm", "run", "dev"]

EXPOSE 3000