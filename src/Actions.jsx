let nextTodoId = 0;

export function addTodoAction(name) {
  return {
    type: 'ADD_TODO',
    id: ++nextTodoId,
    name
  };
}

export function toggleTodoAction(id) {
  return {type: 'TOGGLE_TODO', id};
}

export function changeFilterAction(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}
