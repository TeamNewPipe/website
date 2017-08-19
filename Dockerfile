FROM nginx:latest

RUN sed -i 's/access_log.*/access_log off;/' /etc/nginx/nginx.conf

ADD . /usr/share/nginx/html
