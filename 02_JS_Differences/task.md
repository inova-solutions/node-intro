# Task - 02 Differences to Browser JS

## A) Run a File

Create a JS File with the following content:

```js
console.log('Hello World!');
```

Run the file using `node <filename.js>`

## B) Log different objects

Log the following object and examine them.

- `window`
- `document`
- `global`
- `process`

## C) Node specials

### Arguments

Create a file with the following content:

```js
console.log(process.argv);
```

Run it with the following commands:

- `node <filename.js> foo bar`
- `node <filename.js> -f -b`
- `node <filename.js> "Hello World"`

### Exit

Create a file with the following content and run it.

```js
console.log('foo');
process.exit();
console.log('bar');
```

### Timeout

Create a file with the following content and run it.

```js
setTimeout(() => {
  console.log('Hello World');
}, 5000);
```
