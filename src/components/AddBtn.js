import React from 'react';

export default ({isFull, onAdd}) => {
  if(isFull) {
    return (
      <span>
        You already have enough Todos
      </span> 
    );
  } else {
    return (
      <span onClick={onAdd}>Add a new Todo</span>
    );
  }
};