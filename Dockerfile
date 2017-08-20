FROM nginx:alpine

RUN sed -i 's/access_log.*/access_log off;/' /etc/nginx/nginx.conf

ADD . /usr/share/nginx/html
