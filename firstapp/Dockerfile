FROM node:alpine

WORKDIR '/app'
COPY package.json .
RUN npm install
copy . .
EXPOSE 8900
CMD ["npm","start"]