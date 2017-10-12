import { combineReducers } from 'redux';

import { ADD_TODO, CHECK_TODO, DELETE_TODO } from './types';

const todos = (state = {
  1: {
    id: 1,
    label: 'Get yourself familiar with TodoList',
    done: false
  }
}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          label: action.label,
          done: false
        }
      };
    case CHECK_TODO:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          done: !state[action.id].done
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

export default combineReducers({
  todos
});