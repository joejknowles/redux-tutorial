import TodoItem from './todoItem.jsx';
const { Component } = React;

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
    const { store } = this.context;
    this.unsubscribe = store.subscribe(()=>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const { todos, visibilityFilter } = store.getState();
    return <List
      todos={ filterTodos(todos, visibilityFilter) }
      onTodoClick={ (id) => store.dispatch({type: 'TOGGLE_TODO', id}) }/>
  }
}

TodoList.contextTypes = {
  store: React.PropTypes.object
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
