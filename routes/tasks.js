const knex = require('../knex.js');

module.exports = {
  addTask: async (req, res) => {
    try {
      await knex('tasks').insert({
        text: req.body.taskText,
        list_id: req.params.id,
      });

      res.redirect('/todo/' + req.params.id);
    } catch (error) {
      throw error;
    }
  },
  editPage: async (req, res) => {
    try {
      const task = await knex('tasks')
        .select('id', 'text', 'list_id')
        .where({ id: req.params.id });

      res.render('edit.ejs', {
        task,
      });
    } catch (error) {
      throw error;
    }
  },
  editTask: async (req, res) => {
    try {
      await knex('tasks')
        .where({ id: req.params.id })
        .update({ text: req.body.taskText });

      res.redirect('/todo/' + req.body.list_id);
    } catch (error) {
      throw error;
    }
  },
  deleteTask: async (req, res) => {
    try {
      await knex('tasks').where({ id: req.params.id }).del();

      res.redirect('/todo/' + req.params.list_id);
    } catch (error) {
      throw error;
    }
  },
};
