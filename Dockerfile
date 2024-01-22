FROM node:18
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install sequelize-cli --save

COPY . .



EXPOSE 7050

