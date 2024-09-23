FROM debian:latest

RUN apt-get update && apt-get install -y curl bash python3 && apt-get clean
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
ENV NVM_DIR="/root/.nvm"
ENV NODE_VERSION="22"
RUN . "$NVM_DIR/nvm.sh" && nvm install $NODE_VERSION && nvm use $NODE_VERSION
RUN . "$NVM_DIR/nvm.sh" && npm i -g pnpm
WORKDIR /home/server/
COPY . .




