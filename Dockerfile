FROM nginx:1.11.10
MAINTAINER antono@clemble.com

RUN nginx -V --with-http_v2_module;

ADD     nginx.conf       /etc/nginx/
COPY    public           /usr/share/nginx/html/