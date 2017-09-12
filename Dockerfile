FROM node:8.4.0

WORKDIR /usr/src/app

COPY . .
RUN npm install && npm cache clean --force

# setting NODE_ENV need to be AFTER npm install
ENV NODE_ENV production
ENV NODE_PORT 8000

EXPOSE $NODE_PORT

CMD ["./node_modules/.bin/babel-node", "./build/server/index.js"]
