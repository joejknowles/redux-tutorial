import store from './store.jsx'
const { Component } = React;

import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import FilterTodos from './FilterTodos.jsx';

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

const TodoApp = () => (
  <div>
    <AddTodo />
    <FilterTodos />
    <TodoList />
  </div>
)

ReactDOM.render(<Provider store={ store }>
  <TodoApp />
</Provider>, document.getElementById('root'));
