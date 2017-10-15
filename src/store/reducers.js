import { combineReducers } from 'redux';

import { ADD_TODO, CHECK_TODO, DELETE_TODO, REQUEST_TODOS, RECEIVE_TODOS, ADD_FAILURE, RESET_ERR } from './types';

const todoItems = (state = {}, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.id]: action.added
      };
    case CHECK_TODO:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          done: action.done
        }
      };
    case DELETE_TODO:
      return Object.keys(state).reduce((obj, key) => {
        if(action.id != key) {
          obj[key] = state[key];
        }
        return obj;
      }, {});
    default:
      return state;
  }
};

const todos = (state = {
  loading: true,
  items: {}
}, action) => {
  switch(action.type) {
    case ADD_TODO:
    case CHECK_TODO:
    case DELETE_TODO:
      return {
        ...state,
        items: todoItems(state.items, action)
      };
    case REQUEST_TODOS:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_TODOS:
      return {
        ...state,
        loading: false,
        items: action.items
      };
    default:
      return state;
  }
}

const errorMsg = (state = null, action) => {
  switch(action.type) {
    case RESET_ERR:
      return null;
    case ADD_FAILURE:
      return action.msg;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  errorMsg
});