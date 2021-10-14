# Task - 04 Modules

Creating a calculater CLI.

The final program should be able to work like this:

```sh
node calc.js 7 + 5
# 12

node calc.js 7 - 5
# 2
```

## A) Main File

- Create a JavaScript File
- Read and log the first 3 arguments passed to the script

## B) Operations

- Create another JavaScript file
- export a function which takes 2 numbers as argument and adds them together
- export another function which subtracts the 2nd argument from the 1st argument

## C) Setting up the operation selection

- import the addition and subtraction operations
- depending on the 2nd argument (+, -, ...) passed to the script, execute the correct operation

```js
switch (arg1) {
  case '+':
    add(arg2, arg3);
    break;

  case '-':
    subtract(arg2, arg3);
    break;

  // ...
}
```

## D) Optional

- (easy) add more operations to the calculator CLI
- (hard) allow an unknown number of arguments (eg. add more than 2 numbers together)

## Help

- [Convert string to number](https://stackoverflow.com/a/1133814/8995651)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
