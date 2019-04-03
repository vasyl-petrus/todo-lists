module.exports = {
    addList: (req, res) => {
        let title = req.body.listTitle;
        let query = "INSERT INTO lists (name) VALUES ('" + title + "')";

        con.query(query, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.redirect('/');
        });
    },
    getLists: (req, res) => {
        let query = "SELECT * FROM lists ORDER BY id DESC";
        let tasks = "SELECT * FROM tasks ";
        con.query(query, (err, lists) => {
            con.query(tasks, (err, tasks) => {
                if (err) {
                    res.redirect('/');
                }
                res.render('index.ejs', {
                    lists,
                    tasks
                });
            });
        });
    },
    getList: (req, res) => {
        let list = "SELECT id,name FROM lists WHERE id='" + req.params.id + "'";
        let tasks = "SELECT * FROM tasks WHERE listId='" + req.params.id + "'";

        con.query(list, (err, list) => {
            con.query(tasks, (err, tasks) => {

                if (err) {
                    res.redirect('/');
                }
                res.render('todoList.ejs', {
                    list,
                    tasks
                });
            });
        });
    },
    deleteList: (req, res) => {
        let listId = req.params.id;
        let deleteList = 'DELETE FROM lists WHERE id = "' + listId + '"';
        let deleteTasks = 'DELETE FROM tasks WHERE listId = "' + listId + '"';
        con.query(deleteTasks, (err, result) => {
            con.query(deleteList, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
                res.redirect('/');
            });
        });
    }
}