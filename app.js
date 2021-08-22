const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
const knex = require('./knex.js');
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
app.put('/todo/edit/:id', editPage);
app.get('/todo/edit/:id', editTask);
app.delete('/todo/delete/:id', deleteTask);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, () => console.log(`app listening on port 3000!`));
