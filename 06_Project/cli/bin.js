#!/usr/bin/env node

/**
 * TASK:
 * Write a CLI which handels the following commands:
 * 
 * todo | displays a list of all todo items
 * todo --add <text> | adds a new todo item
 * todo -a <text> | adds a new todo item
 * todo --clear | removes all todos
 * todo -c | removes all todos
 */

/**
 * @type {string} obj.command command name: could be --add, -a, --clear, -c
 * @type {string} obj.todo text for a new todo
 */
const [
  command,
  todo
] = process.argv.slice(2);

switch(command) {
  // ...
}