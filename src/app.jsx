const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id, name: action.name, completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
      todo(undefined, action),
        ...state
      ];
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
}

const visibilityFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((previous, key) =>{
      previous[key] = reducers[key](state[key], action);
      return previous;
    }, {})
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const {createStore} = Redux;
const store = createStore(todoApp);

store.dispatch({type: "ADD_TODO", id: 0, name: 'first todo'})


console.log(store.getState());
console.log('tests passed');


const { Component } = React;

import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import FilterTodos from './FilterTodos.jsx';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo store={ store } />
        <FilterTodos store={ store } />
        <TodoList todos={ this.props.todos }
        store={ store } />
      </div>
    );
  }
}

const filterTodos = (allTodos, filter) => {
  console.log(filter)
  switch (filter) {
    case 'SHOW_ALL':
      return allTodos;
    case 'COMPLETED':
      return allTodos.slice().filter((t) => t.completed );
    case 'TODO':
      return allTodos.slice().filter((t) => !t.completed );
    default:
      return allTodos;
  }
}

const render = () => {
  const { todos, visibilityFilter } = store.getState();
  const filteredTodos = filterTodos(todos, visibilityFilter);
  console.log(filteredTodos)
  ReactDOM.render(<TodoApp todos={filteredTodos}/>, document.getElementById('root'));
  console.log(store.getState());
};

store.subscribe(render);
render();
