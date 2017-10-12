import { ADD_TODO, CHECK_TODO, DELETE_TODO } from './types';

let index = 1;
export const addTodo = label => ({
  type: ADD_TODO,
  id: ++index,
  label
})

export const checkTodo = id => ({
  type: CHECK_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})