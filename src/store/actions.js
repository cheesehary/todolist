import axios from 'axios';

import { ADD_TODO, CHECK_TODO, DELETE_TODO, REQUEST_TODOS, RECEIVE_TODOS, ADD_FAILURE, RESET_ERR } from './types';

const addInStore = added => ({
  type: ADD_TODO,
  id: added.id,
  added
});

const errorMsg = msg => ({
  type: ADD_FAILURE,
  msg
});

export const addTodo = label => dispatch => {
  return axios.post('/api/add-todo', {label}).then(res => {
    dispatch(addInStore(res.data.added));
  }, err => {
    dispatch(errorMsg(err.response.data.msg));
  });
};

export const resetErr = () => ({
  type: RESET_ERR,
});

const checkInStore = checked => ({
  type: CHECK_TODO,
  id: checked.id,
  done: checked.done
});

export const checkTodo = id => dispatch => {
  return axios.post('/api/check-todo', {id}).then(res => {
    dispatch(checkInStore(res.data.checked));
  });
};

const deleteInStore = id => ({
  type: DELETE_TODO,
  id
});

export const deleteTodo = id => dispatch => {
  return axios.post('/api/delete-todo', {id}).then(res => {
    dispatch(deleteInStore(res.data.id));
  });
};

const requestTodos = () => ({
  type: REQUEST_TODOS
});

const receiveTodos = items => ({
  type: RECEIVE_TODOS,
  items
});

export const fetchTodos = () => dispatch => {
  dispatch(requestTodos);
  return axios.get('/api/fetch-todos').then(res => {
    dispatch(receiveTodos(res.data.todos));
  });
};