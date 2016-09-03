const { combineReducers } = Redux;
import byId, * as fromById from './byId.jsx'
import createList, * as fromCreateList from './createList.jsx'

const getAllIds = (state) =>
  state.allIds.map(id => fromById.getTodo(state, id));

export const filterTodos = (state, filter) => {
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
}

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const todos = combineReducers({
  byId,
  listByFilter
});

export const getIsFetching = (state, filter) =>
  fromCreateList.getIsFetching(state.listByFilter[filter]);

export default todos;
