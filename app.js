const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const { addList, getLists, deleteList, getList } = require('./routes/index');
const { addTask, editPage, editTask, deleteTask } = require('./routes/tasks');

app.get('/', getLists);
app.post('/', addList);
app.get('/delete/:id', deleteList);
app.get('/todo/:id', getList);
app.post('/todo/:id', addTask);
app.get('/todo/edit/:id', editPage);
app.post('/todo/edit/:id', editTask);
app.get('/todo/delete/:list_id/:id', deleteTask);

app.use(function (req, res, next) {
  res.status(404);

  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});

app.listen(3000, () => console.log(`app listening on port 3000!`));
