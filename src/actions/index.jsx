import { generate } from 'shortid'
import * as api from '../fakeDB.jsx'

const requestTodos = (filter) =>({
  type: 'REQUEST_TODOS',
  filter
});

export const addTodo = (name) => ({
  type: 'ADD_TODO',
  id: generate(),
  name
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch) => {
  dispatch(requestTodos(filter));
  return api.fetchTodos(filter).then(response =>
    dispatch(receiveTodos(filter, response))
  );
};
