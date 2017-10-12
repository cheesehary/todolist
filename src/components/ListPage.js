import React from 'react';
import { Link } from 'react-router-dom';

import TodoList from '../containers/TodoList';
import AddButton from '../containers/AddButton';

export default () => (
  <div>
    <Link to="/">Back to Home</Link>
    <TodoList />
    <AddButton />
  </div>
);