# Dev Container for TypeScript

This is an opinionated dev container for TypeScript. You can use it for all kinds of projects, including micro services, frontends, etc. The dev container is designed to be used on hosts running MacOS, Linux or Windows.

Note that this is a full-time dev container. VS Code remotely connects to the dev container and all commands are executed inside of the dev container. Any terminals you open inside of VS Code are terminals of the dev container. This dev container is not used in a model where it lives only for the duration of one command.

## How to Use this Repository

If you are at the repository in github, click the green button with "Use Template" to create a new repository with the code of this repository as a starting position.

Then clone your new repository and create the dev container locally.

Once the dev container is running, create your TypeScript project just like you'd do without the dev container. The difference is, that apart from the prerequisites listed below you do not need to install any other software.

### Prerequisites:

You need the following software in order to use this container:
1. VS Code
2. VS Code extension "Remote Development"
3. git client
4. Docker Desktop (MacOS, Windows) or docker engine (Linux)

All other tools, e.g. TypeScript, will be available inside the dev container.


## Other Notes

This repository contains the complete source code for these two articles:

- ["Creating a Dev Container for TypeScript and VS Code - Part 1"](https://manfredmlange.medium.com/creating-a-dev-container-for-typescript-and-vs-code-part-1-e653bb95c27f?sk=91a2735225ec4c746b3da0a231c24147)

- ["Creating a Dev Container for TypeScript and VS Code - Part 2"](https://manfredmlange.medium.com/creating-a-dev-container-for-typescript-and-vs-code-part-2-2b856f4ce8cf?sk=f5ebbc8d8e3c9256d22705bdb438a0d1)

The branch for part 1 is called ["part-1"](https://github.com/RimuTec/dev-container-typescript/tree/part-1).

Equally, the branch for part 2 is called ["part-2"](https://github.com/RimuTec/dev-container-typescript/tree/part-1).
