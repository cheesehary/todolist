import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todo from './reducers';

export default createStore(todo, applyMiddleware(thunkMiddleware));