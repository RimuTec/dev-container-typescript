FROM node:14.17.4

# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@6.14.14


################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    curl
