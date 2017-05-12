FROM nginx:1.11.10
MAINTAINER antono@clemble.com

ADD     nginx.conf       /etc/nginx/
COPY    public           /usr/share/nginx/html/
COPY    public           /etc/nginx/html/