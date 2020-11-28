var todos = [];

function getAll() {
  return todos;
}

function create(todo) {
  todo.done = false;
  todos.push(todo);
}

module.exports = {
  getAll,
  create
};

