FROM node:9.3.0
RUN useradd -ms /bin/bash admin && mkdir -p /usr/src/app && cd /usr/src && chown admin:admin app
USER admin
COPY app /usr/src/app
WORKDIR /usr/src/app
RUN npm install