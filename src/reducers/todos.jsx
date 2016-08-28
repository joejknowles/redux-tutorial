const { combineReducers } = Redux;
import todo from './todo.jsx'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)

      };
    default:
      return state;
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
    return state;
  }
}

const getAllIds = (state) =>
  state.allIds.map(id => state.byId[id]);

export const filterTodos = (state, filter) => {
  const allTodos = getAllIds(state);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter(t => t.completed );
    case 'active':
      return allTodos.filter(t => !t.completed );
    default:
      return allTodos;
  }
}

const todos = combineReducers({
  byId,
  allIds
});

export default todos;
