FROM node:13-alpine
RUN mkdir -p ./app
COPY . .
WORKDIR /sample-company
RUN npm install
CMD ["node", "server.js"]