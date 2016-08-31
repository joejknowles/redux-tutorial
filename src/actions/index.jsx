import { generate } from 'shortid'

export const addTodo = (name) => ({
  type: 'ADD_TODO',
  id: generate(),
  name
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const receiveTodos = (response) => ({
  type: 'RECEIVE_TODOS',
  response
});
