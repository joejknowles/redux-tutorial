import store from './store.jsx'

import AddTodo from './AddTodo.jsx';
import FilterTodos from './FilterTodos.jsx';
import TodoList from './TodoList.jsx';

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
