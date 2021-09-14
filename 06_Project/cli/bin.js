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

const [
  /** @type {string} command name: could be --add, -a, --clear, -c */
  command,

  /** @type {string} text for a new todo */
  todo
] = process.argv.slice(2);

switch(command) {
  // ...
}