const { Component } = React;
import TodoItem from './todoItem.jsx';

export default class TodoList extends Component {
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
