FROM jekyll/jekyll as builder

COPY Gemfile /srv/jekyll
RUN bundle install

COPY Gemfile.lock /srv/jekyll
RUN bash -xc "chown jekyll: Gemfile.lock && \
    cd /srv/jekyll && \
    gem install bundler && \
    bundle update"

COPY . /srv/jekyll

ARG ISSO_ADDRESS

RUN bash -xc "chown -R jekyll: /srv/jekyll && \
    cd /srv/jekyll && \
    jekyll clean && \
    jekyll build && \
    mv _site/ /data"

FROM nginx:1.13-alpine

# Disable access logs (if needed, can be fetched from the reverse proxy)
# and also make sure hidden files are not served by NGINX
# TODO the latter doesn't work currently
RUN sed -i 's/access_log.*/access_log off;/' /etc/nginx/nginx.conf && \
    sed -i 's/^}/    location ~ \^\/(\\\.) { internal; }\n}/' /etc/nginx/conf.d/default.conf

COPY --from=builder /data /usr/share/nginx/html
