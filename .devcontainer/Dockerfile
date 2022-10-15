FROM node:18.11.0
# Last version check on 15 Oct 2022.
# Newer versions may be available at https://hub.docker.com/_/node
# Note that if you want to use this container for a Create React Application (CRA)
# a safer bet will be the most recent LTS version, which is 16.18.0 as of
# 15 Oct 2022.
# [Manfred]


# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@8.19.2
# Last version check on 03 Oct 2022.
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
RUN npm install -g typescript@4.8.4
# Last version check on 03 Oct 2022.
# Newer versions might be available at https://www.npmjs.com/search?q=typescript
# [Manfred]
