var express = require('express');
var router = express.Router();
var { create, list, todoList, todo, db } = require('../database.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: req.query.list });
});

router.post('/', (req, res, next) => {
	req.query.
})

module.exports = router;
