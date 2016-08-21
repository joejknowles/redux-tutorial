import store from './store.jsx'
const { Component } = React;

import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import FilterTodos from './FilterTodos.jsx';
const { Provider } = ReactRedux;

const TodoApp = () => (
  <div>
    <AddTodo />
    <FilterTodos />
    <TodoList />
  </div>
)

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
