FROM jekyll/jekyll as builder

COPY Gemfile /srv/jekyll
RUN bundle install

COPY Gemfile.lock /srv/jekyll
RUN bash -xc "chown jekyll: Gemfile.lock && \
    cd /srv/jekyll && \
    gem install bundler && \
    bundle update"

WORKDIR /srv/jekyll

# define args and env vars before copying content to speed up subsequent builds, as they hardly ever change
ARG ISSO_ADDRESS
ENV JEKYLL_ENV=production

# fix timezone so that our CE(S)T timestamps work
# we specify the times relative to the UTC, however, jekyll does not render them with this image's default timezone
# changing the timezone to a CE(S)T one appears to fix the issue
ENV TZ=Europe/Berlin

# copy data
COPY . /srv/jekyll/

RUN bash -xc "chown -R jekyll: /srv/jekyll && \
    bundle update jekyll && \
    cd /srv/jekyll && \
    jekyll clean && \
    jekyll build && \
    mv _site/ /data"

FROM nginx:alpine

# Disable access logs (if needed, can be fetched from the reverse proxy)
# and also make sure hidden files are not served by NGINX
# TODO the latter doesn't work currently
RUN sed -i 's/access_log.*/access_log off;/' /etc/nginx/nginx.conf && \
    sed -i 's/^}/    application\/rss+xml rss;\n    application\/atom+xml;\n}/' /etc/nginx/mime.types

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

COPY --from=builder /data /usr/share/nginx/html
