import todos, * as fromTodos from './todos.jsx'
const { combineReducers } = Redux

const todoApp = combineReducers({
  todos
});

export const filterTodos = (state, filter) => {
  return fromTodos.filterTodos(state.todos, filter);
}

export default todoApp;
