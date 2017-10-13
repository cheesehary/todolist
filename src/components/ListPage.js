import React from 'react';
import { Link } from 'react-router-dom';

import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';

export default () => (
  <div>
    <Link to="/">Back to Home</Link>
    <TodoList />
    <AddTodo />
  </div>
);