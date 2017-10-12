import { ADD_TODO, CHECK_TODO, DELETE_TODO } from './types';

export const checkTodo = id => ({
  type: CHECK_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})