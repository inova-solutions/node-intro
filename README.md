# Node

This repository explains basic Node & NPM concepts.

## 01 Architecture

In this chapter are the different parts of a basic node architecture explained.

Graphic of how a Node/NPM installation could look like:

![Overview](01_Architecture/overview.png)

### A) What is Node

Node is a Runtime for running JavaScript outside of a browser. It uses the V8 Engine, which is also used in Google Chrome (Chromium), to execute JS Code. It works event-driven which allows non-blocking operations and is a great use for data-intensive applications.

![Overview](01_Architecture/node.js-architecture.png)

Due to its single thread architecture it is also easily scalable.

![Overview](01_Architecture/traditional-vs-node.js-server-thread.png)

### B) What is NPM

NPM is a package manager for managing private or public pieces of code in the Node environment. The packages are kept in the global npm registry ([www.npmjs.com](https://www.npmjs.com/)) or in a private third party registry. Existing packages can be installed in your project via the npm CLI, and new packages can be created and uploaded or linked in your project.

Useful commands:

- `npm init` creates a new NPM project
- `npm install [package]` installs a package
- `npm ci` installs all packages with specific versions listed in the `package-lock.json`

### C) What is NVM

NVM can manage what versions of Node and NPM you want to install. It also allowes switching between versions.

Useful commands:

- `nvm list` shows what versions are installed
- `nvm list available` shows all versions that can be installed
- `nvm install [version]` installs a version
- `nvm use [version]` switches to a version

## 02 Differences to Browser JS

- window does not exist
- global does exist
- some global objects like console or setTimeout/setInterval exist
- process (infos about Node environment)
- can access filesystem

## 03 File System

- blocking or non-blocking (sync/async/promise)
- readFile/readFileSync
- writeFile/writeFileSync

## 04 Modules

- CommonJS (required/module.exports)
- ES Modules (import/export)

## 05 NPM

- `npm init`
- `npm install <...>`
- `-g` flag
- dependencies/devDependencies
- node_modules

## 06 Express

Todo list project with express server.

## 99 Resources

- https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm
- https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm
- https://www.youtube.com/watch?v=ENrzD9HAZK4
- https://v8.dev/
- https://www.npmjs.com/
- https://www.simform.com/blog/what-is-node-js/