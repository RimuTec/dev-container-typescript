FROM node:18.9.0
# Last version check on 10 Sep 2022.
# Newer versions may be available at https://hub.docker.com/_/node
# Note that if you want to use this container for a Create React Application (CRA)
# a safer bet will be the most recent LTS version, which is 16.17.0 as of
# 10 Sep 2022.
# [Manfred]


# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@8.19.1
# Last version check on 10 Sep 2022.
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
RUN npm install -g typescript@4.8.2
# Latest stable release. Newer versions might be available from
# https://www.npmjs.com/search?q=typescript
# Version last checked on 03 Sep 2022 [Manfred]
