FROM nginx:alpine

COPY ./cfg/nginx.conf /etc/nginx/nginx.conf

COPY content /usr/share/nginx/html
