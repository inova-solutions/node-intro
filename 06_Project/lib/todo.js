import { readData, writeData } from "./storage.js"

export const getTodos = async function() {
  return (await readData()) ?? [];
}

export const appendTodo =  async function(todo) {
  const todos = await getTodos();
  todos.push(todo);
  await writeData(todos);
  return todos;
}

export const clearTodos = function() {
  return writeData([]);
}