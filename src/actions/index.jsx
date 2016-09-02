import { generate } from 'shortid'
import * as api from '../fakeDB.jsx'

export const addTodo = (name) => ({
  type: 'ADD_TODO',
  id: generate(),
  name
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

const receiveTodos = (response) => ({
  type: 'RECEIVE_TODOS',
  response
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );
