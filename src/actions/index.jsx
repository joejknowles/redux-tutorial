import { getIsFetching } from '../reducers/index.jsx';
import * as api from '../fakeDB.jsx';
import { normalize } from 'normalizr';
import * as schema from '../schema.jsx'

export const addTodo = (name) => (dispatch) => (
  api.addTodo(name).then(response => dispatch({
    type: 'ADD_TODO_SUCCESS',
    response: normalize(response, schema.todo)
  }))
);

export const toggleTodo = (id) => (dispatch) => (
  api.toggleTodo(id).then(response => dispatch({
  type: 'TOGGLE_TODO_SUCCESS',
  response: normalize(response, schema.todo)
})));

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });
  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_ERROR',
        filter,
        message: error.message || 'that ain\'t right!'
      });
    }
  );
};
