const express = require('express');
const mustache = require('mustache-express');
const fs = require('fs').promises;
fs.exists = require('fs').existsSync;
const app = express();
const port = process.env.port || 3000;
const storage = __dirname + '/data.json';

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/pages');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function getData() {
  // return empty if file does not exist
  if (!fs.exists(storage)) return [];

  // read and return data
  const data = await fs.readFile(storage, 'utf-8');
  return data === '' ? [] : JSON.parse(data);
}

function writeData(data) {
  return fs.writeFile(storage, JSON.stringify(data));
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