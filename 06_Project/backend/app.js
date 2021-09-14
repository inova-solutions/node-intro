import { appendTodo, getTodos } from '../lib/todo.js';
import express from 'express';
import cors from 'cors';
const app = express();

// allow cross origin
app.use(cors());

app.get('/', async function(_, res) {
  const todos = await getTodos();
  res.json(todos);
});

app.post('/todo', async function(req, res) {
  const {todo} = req.body;
  if (!todo) return res.sendStatus(400);

  appendTodo(todo);
  res.sendStatus(201);
});

app.listen(3000);