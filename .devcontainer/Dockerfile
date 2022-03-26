FROM node:16.14.2
# Last check on 27 Mar 2022. Newer LTS version numbers can be checked at https://nodejs.org/en/
# Official Node images are available at https://hub.docker.com/_/node

# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@8.5.5
# Last check on 27 Mar 2022. Newer versions may be available from https://www.npmjs.com/package/npm


################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    curl
