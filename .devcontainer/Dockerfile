FROM node:18.7.0
# This is the latest available LTS version. Newer versions might be available
# at https://hub.docker.com/_/node Version last checked on 13 June 2022.
# [Manfred]

# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@8.15.1
# To check if newer versions are available, see https://www.npmjs.com/package/npm
# Version last checked on 29 July 2022. [Manfred]


################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    curl
