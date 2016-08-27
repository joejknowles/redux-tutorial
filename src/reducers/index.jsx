import todos from './todos.jsx'
import visibilityFilter from './visibilityFilter.jsx'
const { combineReducers } = Redux

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
