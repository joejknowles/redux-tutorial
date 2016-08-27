import TodoItem from './todoItem.jsx'

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

export default List;
