// simplified database
let _index = 1;
const _database = {
  todos: {
    [_index]: {
      id: _index,
      label: 'The first task is from server',
      done: false
    }
  }
};

export const fetchTodos = (req, res) => {
  res.json({todos: _database.todos});
};

export const addTodo = (req, res) => {
  _index++;
  _database.todos[_index] = {
    id: _index,
    label: req.body.label,
    done: false
  };
  res.json({added: _database.todos[_index]});
};

export const checkTodo = (req, res) => {
  const id = req.body.id;
  _database.todos[id].done = !_database.todos[id].done;
  res.json({checked: {
    id,
    done: _database.todos[id].done
  }});
};

export const deleteTodo = (req, res) => {
  const id = req.body.id;
  delete _database.todos[id];
  res.json({id});
};