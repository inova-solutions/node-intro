#!/usr/bin/env node

import { getTodos, appendTodo, clearTodos } from "../lib/todo.js";

const [command, todo] = process.argv.slice(2);

const runProgram = async function() {
  switch(command) {
    case undefined: {
      const todos = await getTodos();
      if (!todos.length) return console.log('There are currently no todos');
      todos.forEach(t => console.log('- ' + t));
      return;
    }
      
    case '--add':
    case '-a': {
      if (!todo) return console.error('Please specify a todo');
      await appendTodo(todo);
      return;
    }

    case '--clear':
    case '-c': {
      return clearTodos();
    }

    default:
      console.table({
        ['todo']: 'display todos',
        ['todo --add <text>']: 'add new todo',
        ['todo -a <text>']: 'add new todo',
      });
  }
};

runProgram();