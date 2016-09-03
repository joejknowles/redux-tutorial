import { generate } from 'shortid'
import { getIsFetching } from '../reducers/index.jsx'
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
        response
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
