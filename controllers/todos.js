const Todo = require('../models/todos');
const { render } = require('../server');


function index(req, res) {
    res.render('index', {
      todos : Todo.getAll(),
    });
}

function create(req, res) {
  const todoObj = JSON.parse(JSON.stringify(req.body));
  todoObj.done = false;
  Todo.create(todoObj);
  res.redirect('/');
} 

module.exports = {
  index,
  create
}