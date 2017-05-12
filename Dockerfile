FROM        nginx:1.13.0
MAINTAINER  antono@loveit.tips

ADD     nginx.conf       /etc/nginx/
COPY    public           /usr/share/nginx/html/
COPY    ssl              /var/ssl/