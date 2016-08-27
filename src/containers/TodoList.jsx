import TodoItem from '../components/todoItem.jsx';
const { connect } = ReactRedux;
import { toggleTodoAction } from '../actions/index.jsx';
import List from '../components/list.jsx';

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
const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
});
const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodoAction(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
