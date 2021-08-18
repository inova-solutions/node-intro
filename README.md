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

### A) Window / Global

Since there is no DOM in the node environment there will also be no `window` object. This means that some objects which are present in the browser are not available in node (eg. window, document, alert, prompt, ...). Furthermore is the outmost this-context different from JS in browser, where it is the window object. In Node the this-context is the `global` object which works a bit like window. This also allowes to have `setTimeout` and `setInterval`, which would otherwise be included in the window object, in Node.

### B) Process

Another object which is exists in the Node environment is `process`. This object keeps information about the process that started that executes the JS code. This information includes for example arguments used when executing a JS file and has methods to stop/exit the process.

- `process.argv` list of arguments used to execute this JS code
- `process.exit()` method to stop the execution

### C) File system access

Unlike browser JS, Node is actually able to access things like the file system. This allows for very useful serverside execution of JS, but will also be a bit more dangerous than regular browser JS. Node provides a built-in support for file system access through the [`fs` package](https://nodejs.org/api/fs.html).

Access to the file system can be done in either a blocking, or non-blocking manner. The `fs` package includes some synchronous methods, although an asynchronous approach is recommanded. Asynchronous methods can either have callbacks, eg. `writeFileAsync`, where a callback function must be provided, or can be used in promise-fashion, eg. `writeFile` from promise part of the package, where you can listen to a promise, or even use the modern async/await standard.

## 03 Modules

- CommonJS (required/module.exports)
- ES Modules (import/export)

## 04 NPM

- `npm init`
- `npm install <...>`
- `-g` flag
- dependencies/devDependencies
- node_modules

## 05 Express

Todo list project with express server.

## 99 Resources

- https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm
- https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm
- https://www.youtube.com/watch?v=ENrzD9HAZK4
- https://v8.dev/
- https://www.npmjs.com/
- https://www.simform.com/blog/what-is-node-js/
- https://nodejs.org/api/fs.html