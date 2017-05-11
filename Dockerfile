FROM openresty/openresty:latest-xenial
MAINTAINER antono@clemble.com

RUN     /usr/local/openresty/luajit/bin/luarocks install lua-resty-auto-ssl

ADD     nginx.conf       /usr/local/openresty/nginx/conf/nginx.conf
COPY    public           /usr/local/openresty/nginx/html/

ENTRYPOINT ["/usr/local/openresty/nginx/sbin/nginx", "-g", "daemon off;"]
