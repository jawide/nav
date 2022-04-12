FROM node:alpine as build
RUN apk add git
RUN git clone https://ghproxy.com/https://github.com/jawide/nav
WORKDIR /nav
RUN yarn install
RUN yarn build

FROM nginx:alpine as server
COPY --from=build /nav/dist /usr/share/nginx/html