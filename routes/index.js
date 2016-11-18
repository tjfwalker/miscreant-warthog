var express = require('express');
var router = express.Router();
var { create, list, todoList, todo, db } = require('../database.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  Promise.all([todo.all(),list.all()])
    .then( results => {
      const todos = results[0]
      const lists = results[1]

      res.render('index', {todos, lists})
    })
    .catch( error => console.log(error))
});

router.post('/', (req, res, next) => {
  var text = req.body.text
  create.todo(text)
})

module.exports = router;
