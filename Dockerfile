# build
FROM node:18-alpine AS build

WORKDIR /root/app
COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . ./

RUN yarn build

# development
FROM node:18-alpine AS dev

WORKDIR /home/node/app
COPY package*.json ./

RUN yarn
COPY . ./

CMD yarn start:debug


# production
FROM node:18-alpine AS prod

USER node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node --from=build /root/app/package*.json ./
COPY --chown=node:node --from=build /root/app/node_modules ./node_modules

COPY --chown=node:node --from=build /root/app/dist ./dist
COPY --chown=node:node nest-cli.json ./nest-cli.json

EXPOSE 3000
ENTRYPOINT yarn start:prod


