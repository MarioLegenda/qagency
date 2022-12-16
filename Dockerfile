FROM node:16-alpine

COPY . .
RUN yarn install

ENTRYPOINT yarn serve