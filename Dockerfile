FROM node:18
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7050

CMD [ "npm", "start" ]