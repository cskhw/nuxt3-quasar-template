FROM node:lts

WORKDIR /var/www/html/app/

COPY package*.json ./

COPY . /app

RUN npm ci && npm cache clean --force

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 
CMD ["npm" "run" "dev"]
