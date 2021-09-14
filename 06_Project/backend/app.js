import express from 'express';
import cors from 'cors';
const app = express();

// allow cross origin
app.use(cors());

// enable POST as json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * TASK:
 * - get all todos
 * - respond all todos as JSON
 */
app.get('/todo', async function(req, res) {
  // ...
});

/**
 * TASK:
 * - handle wrong input (send status 400)
 * - append todo
 * - send status 201 as confirmation
 */
app.post('/todo', async function(req, res) {
  // ...
});

/**
 * TASK:
 * - remove all todos
 * - send status 204 as confirmation
 */
app.delete('/todo', async function(req, res) {
  // ...
});

// start app
app.listen(3000);