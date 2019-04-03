module.exports = {
    deleteTask: (req, res) => {
        let listId = req.params.id;
        let id = req.params.id;
        let deleteTasks = 'DELETE FROM tasks WHERE id = "' + id + '"';
        con.query(deleteTasks, (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.redirect('/todo/' + listId);
        });
    },
    addTask: (req, res) => {
        let text = req.body.taskText;
        let listId = req.params.id;
        let query = "INSERT INTO tasks (text,listId) VALUES ('" + text + "','" + listId + "')";

        con.query(query, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.redirect('/todo/' + listId);
        });
    },
    editPage: (req, res) => {
        let task = "SELECT id, text,listId FROM tasks WHERE id='" + req.params.id + "'";
        con.query(task, (err, task) => {
            if (err) {
                res.redirect('/');
            }
            res.render('edit.ejs', {
                item: task
            });
        });
    },
    editTask: (req, res) => {
        let text = req.body.taskText;
        let id = req.params.id;
        var listid = req.body.listId;

        let query = "UPDATE `tasks` SET `text` = '" + text + "' WHERE `tasks`.`id` = '" + id + "'";
        con.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/todo/' + listid);
        });
    }
}