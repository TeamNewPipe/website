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

# copy static resources
COPY bootstrap bootstrap
COPY css css
COPY js js
COPY font-awesome font-awesome
COPY legal legal
COPY lunrjs lunrjs
COPY press press
COPY _plugins _plugins
COPY _layouts _layouts
COPY _includes _includes
COPY pdf pdf
COPY _config.yml .
COPY index.html .
COPY favicon.ico .
COPY blog blog
COPY donate donate

# copy files which are changed more regularly (aka content)
COPY .git .git
COPY _tutorials _tutorials
COPY _faq _faq
COPY FAQ FAQ
COPY img img
COPY _data _data
COPY _posts _posts

RUN bash -xc "chown -R jekyll: /srv/jekyll && \
    bundle update jekyll && \
    cd /srv/jekyll && \
    jekyll clean && \
    jekyll build && \
    mv _site/ /data"

RUN ls -al /data /data/img


FROM nginx:alpine

# Disable access logs (if needed, can be fetched from the reverse proxy)
# and also make sure hidden files are not served by NGINX
# TODO the latter doesn't work currently
RUN sed -i 's/access_log.*/access_log off;/' /etc/nginx/nginx.conf && \
    sed -i 's/^}/    application\/rss+xml rss;\n    application\/atom+xml;\n}/' /etc/nginx/mime.types

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

COPY --from=builder /data /usr/share/nginx/html
