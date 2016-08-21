import TodoItem from './todoItem.jsx';
import store from './store.jsx'
const { Component } = React

const filterTodos = (allTodos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return allTodos;
    case 'COMPLETED':
      return allTodos.filter((t) => t.completed );
    case 'TODO':
      return allTodos.filter((t) => !t.completed );
    default:
      return allTodos;
  }
}

export default class TodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { todos, visibilityFilter } = store.getState();
    return <List
      todos={ filterTodos(todos, visibilityFilter) }
      onTodoClick={ (id) => store.dispatch({type: 'TOGGLE_TODO', id}) }/>
  }
}

const List = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todoItem =>
        <TodoItem key={todoItem.id}
          { ...todoItem }
          onClick={ () => onTodoClick(todoItem.id) } />
      )}
    </ul>
  );
}
