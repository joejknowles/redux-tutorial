import TodoItem from './todoItem.jsx';
const { Component } = React;
const { connect } = ReactRedux;

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

const mapStateToProps = (state) => {
  const { todos, visibilityFilter } = state;
  return {
    todos: filterTodos(todos, visibilityFilter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return (id) => {
    dispatch({type: 'TOGGLE_TODO', id})
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
