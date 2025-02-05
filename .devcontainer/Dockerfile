# Last version check on 05 Feb 2025

FROM node:22.13.1
# Check for new versions at https://nodejs.org/en/ or at https://hub.docker.com/_/node
# Note that if you want to use this container for a Create React Application (CRA)
# you may need to use a different version. Consult React documentation.
# [Manfred]


################################################################################
# Upgrade NPM
# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@11.1.0
# Newer versions might be available at https://www.npmjs.com/search?q=npm
# [Manfred]


################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    curl


################################################################################
# Install TypeScript
RUN npm install -g typescript@5.7.3
# Newer versions might be available at https://www.npmjs.com/search?q=typescript
# [Manfred]
