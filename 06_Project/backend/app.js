import { appendTodo, clearTodos, getTodos } from '../lib/todo.js';
import express from 'express';
import cors from 'cors';
const app = express();

// allow cross origin
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/todo', async function(_, res) {
  const todos = await getTodos();
  res.json(todos);
});

app.post('/todo', async function(req, res) {
  if (!req.body?.todo) return res.sendStatus(400);
  await appendTodo(req.body.todo);
  res.sendStatus(201);
});

app.delete('/todo', async function(_, res) {
  await clearTodos();
  res.sendStatus(204);
});

app.listen(3000);