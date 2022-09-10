# Dev Container for TypeScript

This is an opinionated dev container for TypeScript. You can use it for all kinds of projects, including micro services, frontends, etc. The dev container is designed to be used on hosts running MacOS, Linux or Windows.

Note that this is a full-time dev container. VS Code remotely connects to the dev container and all commands are executed inside of the dev container. Any terminals you open inside of VS Code are terminals of the dev container. This dev container is not used in a model where it lives only for the duration of one command.

# How to Use this Repository

If you are at the repository in github, click the green button with `Use this template` to create a new repository with the code of this repository as a starting position.

After you created your new repository, change the published (aka exposed) port number to a number that you don't use that. Only then create the dev container locally by reopening it with VS Code or by using the following command in a terminal at the root of the repository:

```bash
docker-compose -f .devcontainer/docker-compose.yml build
```

Once the dev container is running, create your TypeScript project just like you'd do without the dev container. The difference is, that apart from the prerequisites listed below, you do not need to install any other software.

# Prerequisites:

You need the following software in order to use this container:
1. VS Code
2. VS Code extension "Remote Development"
3. git client
4. Docker Desktop (MacOS, Windows) or docker engine (Linux)

All other tools, e.g. TypeScript, will be available inside the dev container.

# Concepts, Principles and Settings

As this container is opinionated, it is maintained with the following concepts in mind:

1. Container to be used full-time, i.e., not just while a command is executed
2. Designed for VS Code but can be used with other IDEs as well
3. Trunk-based development. If you have branches other than `main` the settings should still work.
4. `git pull` does rebase
5. Auto-forwarding of ports (automatic mapping) by VS Code is switched off. It's better to fail fast. You need to understand how port mapping works. Consult with the Docker documentation for more details.
6. Use specific versions for node, npm, typescript and similar dependencies to reduce variability.
7. Use latest stable releases if possible but no pre-release, beta, previews, etc.
8. Minimize the number of prerequisites for getting started. All other tools should be specified in the dev container.
9. TypeScript strings use single quotes
10. Files are formatted on save
11. Tab size is 3

# Other Notes

This repository also contains the complete source code for these two articles:

- ["Creating a Dev Container for TypeScript and VS Code - Part 1"](https://manfredmlange.medium.com/creating-a-dev-container-for-typescript-and-vs-code-part-1-e653bb95c27f?sk=91a2735225ec4c746b3da0a231c24147)

- ["Creating a Dev Container for TypeScript and VS Code - Part 2"](https://manfredmlange.medium.com/creating-a-dev-container-for-typescript-and-vs-code-part-2-2b856f4ce8cf?sk=f5ebbc8d8e3c9256d22705bdb438a0d1)

The code for part 1 is in branch ["part-1"](https://github.com/RimuTec/dev-container-typescript/tree/part-1).

Equally, the code for part 2 is in branch ["part-2"](https://github.com/RimuTec/dev-container-typescript/tree/part-1).
