FROM node:10.15
RUN npm install webpack -g
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["npm","run","start"]
