import { generate } from 'shortid'

export const addTodoAction = (name) => ({
  type: 'ADD_TODO',
  id: generate(),
  name
});

export const toggleTodoAction = (id) => ({
  type: 'TOGGLE_TODO',
  id
});


export const changeFilterAction = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
