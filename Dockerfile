# From base image node
FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm ci --only=production && npm cache clean --force
COPY . /app
CMD node index.js
EXPOSE 3000
