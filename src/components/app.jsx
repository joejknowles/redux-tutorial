import AddTodo from '../containers/AddTodo.jsx';
import FilterTodos from './FilterTodos.jsx';
import TodoList from '../containers/TodoList.jsx';

const App = ({ params }) => (
  <div>
    <AddTodo />
    <FilterTodos />
    <TodoList />
  </div>
);

export default App;
