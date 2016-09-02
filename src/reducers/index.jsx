const { combineReducers } = Redux;

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state };
      action.response.forEach(todo =>
        nextState[todo.id] = todo);
      return nextState;
    default:
      return state;
  }
}

const filterIds = (filter) => (state = [], action) => {
  if (action.filter != filter) {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const getAllIds = (state) =>
  state.allIds.map(id => state.byId[id]);

export const filterTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
}

const idsByFilter = combineReducers({
  all: filterIds('all'),
  active: filterIds('active'),
  completed: filterIds('completed')
});

const todos = combineReducers({
  byId,
  idsByFilter
});

export default todos;
