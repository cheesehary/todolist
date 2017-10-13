import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="app-bg">
    <h1 className="app-title font-60">A simple TodoList</h1>
    <Link className="app-enter hmiddle font-20" to="/list">Enter</Link>
  </div>
);