const knex = require('../knex.js');

module.exports = {
  addList: async (req, res) => {
    try {
      const title = req.body.listTitle;
      await knex('lists').insert({ name: title });

      res.redirect('/').json({ success: true, message: 'ok' });
    } catch (error) {
      throw error;
    }
  },
  getLists: async (req, res) => {
    try {
      const lists = await knex.select('*').from('lists').orderBy('id', 'desc');
      const tasks = await knex.select('*').from('tasks');

      res.render('index.ejs', {
        lists,
        tasks,
      });
    } catch (error) {
      throw error;
    }
  },
  getList: async (req, res) => {
    try {
      const list = await knex
        .select('id', 'name')
        .from('lists')
        .where({ id: req.params.id })
        .orderBy('id', 'desc');
      const tasks = await knex
        .select('*')
        .from('tasks')
        .where({ list_id: req.params.id });

      res.render('todoList.ejs', {
        list,
        tasks,
      });
    } catch (error) {
      throw error;
    }
  },
  deleteList: async (req, res) => {
    console.log({ id: req.params.id });
    try {
      await knex('lists').where({ id: req.params.id }).del();
      await knex('tasks').where({ id: req.params.id }).del();

      res.redirect('/');
    } catch (error) {
      throw error;
    }
  },
};
