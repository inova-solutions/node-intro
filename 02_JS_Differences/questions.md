# Questions - 02 Differences to Browser JS

## A) Which objects exist in the browser JavaScript? (multiple choice)

- window
- document
- global
- process
- navigator
- this

## B) Which objects exist in a Node environment? (multiple choice)

- window
- document
- global
- process
- navigator
- this

## C) What information does `process.argv` contain?

## D) How do you end the file execution prematurely by script?

## E) How long will the following script run? (in ms) And what will be printed to console?

```js
setTimeout(() => {
  console.log('A');

  setTimeout(() => {
    console.log('C');
  }, 1000);

  process.exit();
}, 1200);

console.log('A');

setInterval(() => {
  console.log('B');
}, 500);
```

## F) Where can you use JavaScript to read a file on the disk? (multiple choice)

- Browser
- Node
- none of the above

## G) Where can you use JavaScript to write a file on the disk? (multiple choice)

- Browser
- Node
- none of the above

## H) Where can you use JavaScript to read/write to a database? (multiple choice)

- Browser
- Node
- none of the above

## I) What package can you use to access the filesystem? (multiple choice)

- fs
- access
- ng
- file-system
- angular
