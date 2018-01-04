FROM node:9.3.0
RUN useradd -ms /bin/bash admin && mkdir -p /app && cd / && chown -R admin:admin app
USER admin
COPY ./app /app
WORKDIR /app
RUN npm install