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
  const { label } = req.body;
  const isRepeat = Object.values(_database.todos).some(item => {
    return item.label === label;
  });
  if(!isRepeat) {
    _index++;
    _database.todos[_index] = {
      id: _index,
      label: label,
      done: false
    };
    res.json({added: _database.todos[_index]});
  } else {
    res.status(500).json({msg: "Todo's name repeated"});
  }
};

export const checkTodo = (req, res) => {
  const { id } = req.body;
  _database.todos[id].done = !_database.todos[id].done;
  res.json({checked: {
    id,
    done: _database.todos[id].done
  }});
};

export const deleteTodo = (req, res) => {
  const { id } = req.body;
  delete _database.todos[id];
  res.json({id});
};