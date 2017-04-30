FROM openresty/openresty:latest-xenial
MAINTAINER antono@clemble.com

RUN     /usr/local/openresty/luajit/bin/luarocks install lua-resty-auto-ssl

RUN     openssl req -new -newkey rsa:2048 -days 3650 -nodes -x509 -subj '/CN=sni-support-required-for-valid-ssl' -keyout /etc/ssl/resty-auto-ssl-fallback.key -out /etc/ssl/resty-auto-ssl-fallback.crt

ADD     nginx.conf       /usr/local/openresty/nginx/conf/nginx.conf
COPY    public           /usr/local/openresty/nginx/html/

ENTRYPOINT ["/usr/local/openresty/nginx/sbin/nginx", "-g", "daemon off;"]
