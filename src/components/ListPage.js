import React from 'react';
import { Link } from 'react-router-dom';

import TodoList from '../containers/TodoList';

export default () => (
  <div className="list-bg">
    <Link className="list-back" to="/">Back to Home</Link>
    <TodoList />
  </div>
);