import { createSelector } from 'reselect';

const getTodos = state => state.todos;

export const getSequencedTodos = createSelector(
  [getTodos],
  todos => {
    const dones = [];
    const arr = Object.values(todos).filter(todo => {
      if(todo.done) {
        dones.push(todo);
      }
      return !todo.done;
    });
    return arr.concat(dones);
  }
);