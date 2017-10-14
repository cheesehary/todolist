import { Router } from 'express';

import { fetchTodos, addTodo, checkTodo, deleteTodo } from './api';

const router = Router();

router.get('/fetch-todos', fetchTodos);
router.post('/add-todo', addTodo);
router.post('/check-todo', checkTodo);
router.post('/delete-todo', deleteTodo);

export default router;