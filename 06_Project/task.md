# Task - 06 Todo Fullstack

The goal of the project is to create a full stack JavaScript/Node application, where you can manage todo items.

You are provided with basic storage handling of the todo items. The following functions are exposed in `lib/todo.js` for you to use:

```js
/**
 * Gets all todos
 * @returns {Promise<Array<string>>}
 */
getTodos()

/**
 * Appends a todo
 * @param {string} todo 
 * @returns {Promise<Array<string>>}
 */
appendTodo(todo)

/**
 * Clears all todos from storage
 * @returns {Promise<void>}
 */
clearTodos()
```

These are all `Promise`-based functions, so make sure to use the [`Promise` syntax (`.then()`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or the [native `async`/`await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await).

It is recommended to start the project with the express server.

## Environments

### A) Express Server

You are given a basic express app with scaffolding of 3 routes. You are tasked to implement these routes. Make sure to use the exposed functions in `lib/todo.js`.

```js
/**
 * TASK:
 * - get all todos
 * - respond all todos as JSON
 */
app.get('/todo', async function(req, res) {
  // ...
});

/**
 * TASK:
 * - handle wrong input (send status 400)
 * - append todo
 * - send status 201 as confirmation
 */
app.post('/todo', async function(req, res) {
  // ...
});

/**
 * TASK:
 * - remove all todos
 * - send status 204 as confirmation
 */
app.delete('/todo', async function(req, res) {
  // ...
});
```

To run the API you can execute the start script (`npm start`) in the `package.json`.

```json
"scripts": {
    "start": "nodemon backend/app.js"
},
```

### B) Angular Frontend

You are given the base of an angular application. You are tasked to implement the missing parts in `app.components.ts`. You will need a `BehaviorSubject` to feed the DOM with data. The DOM already consumes said object:

```html
<ul *ngIf="(todos | async).length; else noTodos">
    <li *ngFor="let todo of todos | async">{{todo}}</li>
</ul>
```

You will implement a way to load all todos (`onReload` method), to clear all todos when a button is pressed (`onClear` method), and to add a new todo (`onAdd` method) when a new todo is entered and submitted. You will also handle disabling the form while a submit is in progress and resetting the form after a todo is created.

You are able to use the `TodoService` injected in the constructor, which exposes the follwing methods:

```ts
/**
 * Get all todos from the API
 * @return Observable<string[]>
 */
getTodos()

/**
 * Send a new todo to the API
 * @return Observable<void>
 */
addTodo(todo: string)

/**
 * Remove all todos in the API
 * @return Observable<void>
 */
clearTodos()
```

In this service you will also implement an array reverse on loading the todos to make sure newly added todos are displayed on top. Also you will add 1 second delay to the `addTodo` API call to simulate heavy traffic. Do this using `RxJS` operators.

### C) Node CLI

You are tasked to implement a CLI from scratch to handle the todos. You can of course re-use the exposed methods in `lib/todo.js` or alternatively access the express API. The script is already setup to be executable:

`package.json`

```json
"bin": {
    "todo": "cli/bin.js"
},
```

`bin.js`

```sh
#!/usr/bin/env node
```

Use `npm link` (potentially with administrator privileges) to make this CLI globally available on your system.

## Further steps

When you have implemented all 3 parts of the fullstack application you should test them thoroughly to make sure everything works (eg. create a todo by CLI and reload todos in the Angular page).

As a further exercise you could improve the application by creating a way to mark off todos that are done, and/or remove single todos from the list. This will need a more complex data source, something like this:

`data.json`

```json
[
    {
        "id": 1,
        "text": "Buy groceries",
        "isDone": true,
    },
    {
        "id": 2,
        "text": "Achieve world domination",
        "isDone": false
    }
]
```
