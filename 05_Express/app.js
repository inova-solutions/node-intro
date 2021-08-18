const express = require('express');
const mustache = require('mustache-express');
const fs = require('fs');
const fsp = require('fs').promises;
const app = express();
const port = process.env.port || 3000;
const storage = __dirname + '/data.json';

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/pages');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

function canAccessStorage() {
  return fsp.access(storage, fs.constants.W_OK).then(_ => true).catch(_ => false);
}

async function getData() {
  const defaultData = [];
  return await canAccessStorage()
    ? fsp.readFile(storage, 'utf-8').then(data => data !== '' ? JSON.parse(data) : defaultData)
    : defaultData;
}

function writeData(data) {
  return fsp.writeFile(storage, JSON.stringify(data));
}

app.get('/', async (_req, res) => {
  const todos = await getData();
  res.render('index', {todos});
});

app.post('/add', async (req, res) => {
  // get and check item
  const {todo} = req.body;
  if (!todo) return res.sendStatus(400);
  
  // get existing data and append
  const todos = await getData();
  todos.push(todo);

  // persist data and redirect back to index
  await writeData(todos);
  res.redirect('/');
});

app.listen(port, () => console.log(`Started on http://localhost:${port}`));