FROM ruby:4.0.6 AS builder

LABEL org.opencontainers.image.source="https://github.com/TeamNewPipe/website"

# make debugging easier
SHELL ["/bin/bash", "-xc"]

RUN mkdir /project/
COPY Gemfile Gemfile.lock /project/

WORKDIR /project/

# run bundle lock to rewrite the Lockfile and therefore ignore version differences of bundler and the lockfile without updating dependencies
RUN bundle lock && \
    bundle install

# define args and env vars before copying content to speed up subsequent builds, as they hardly ever change
ARG ISSO_ADDRESS
ENV JEKYLL_ENV=production

# fix timezone so that our CE(S)T timestamps work
# we specify the times relative to the UTC, however, jekyll does not render them with this image's default timezone
# changing the timezone to a CE(S)T one appears to fix the issue
ENV TZ=Europe/Berlin

# copy data
COPY . /project/

RUN bundle exec jekyll clean && \
    bundle exec jekyll build && \
    mv _site/ /data


FROM nginx:alpine

# Disable access logs (if needed, can be fetched from the reverse proxy)
# and also make sure hidden files are not served by NGINX
# TODO the latter doesn't work currently
RUN sed -i 's/access_log.*/access_log off;/' /etc/nginx/nginx.conf && \
    sed -i 's/^}/    application\/rss+xml rss;\n    application\/atom+xml;\n}/' /etc/nginx/mime.types

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

COPY --from=builder /data /usr/share/nginx/html
