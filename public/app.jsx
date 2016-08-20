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
        ...state,
        todo(undefined, action)
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


const testAddTodo= () => {
  const stateBefore = [];
  const stateAfter = [{
    id: 0,
    name: 'this needs doing',
    completed: false
  }];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    name: 'this needs doing'
  };
  deepFreeze(stateBefore);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodos= () => {
  const stateBefore = [{
    id: 0,
    name: 'this needs doing',
    completed: false
  },
  {
    id: 1,
    name: 'this other thing needs doing',
    completed: false
  }];
  const stateAfter  = [{
    id: 0,
    name: 'this needs doing',
    completed: false
  },
  {
    id: 1,
    name: 'this other thing needs doing',
    completed: true
  }];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
    name: 'this other thing needs doing'
  };
  deepFreeze(stateBefore);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testToggleTodos();
testAddTodo();



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

import TodoItem from './todoItem.jsx'

const { Component } = React;

class TodoList extends Component {
  render() {
    const { todos, store } = this.props;
    return (
      <ul>
        {todos.map(todoItem =>
          <TodoItem key={todoItem.id}
            todoItem={ todoItem }
            store={ store } />
        )}
      </ul>
    );
  }
}

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => {
          store.dispatch({type: 'ADD_TODO', name: 'test', id: ++nextTodoId});
          }
        }>button</button>
      <TodoList todos={ this.props.todos }
        store={ store } />
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(<TodoApp todos={store.getState().todos}/>, document.getElementById('root'));
  console.log(store.getState());
};

store.subscribe(render);
render();
