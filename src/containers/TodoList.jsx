import TodoItem from '../components/todoItem.jsx';
const { connect } = ReactRedux;
import { withRouter } from 'react-router'
import { toggleTodoAction } from '../actions/index.jsx';
import List from '../components/list.jsx';

const filterTodos = (allTodos, filter) => {
  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter((t) => t.completed );
    case 'active':
      return allTodos.filter((t) => !t.completed );
    default:
      return allTodos;
  }
}
const mapStateToProps = (state, { params }) => ({
  todos: filterTodos(state.todos, params.filter)
});
const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodoAction(id));
  },
});
export default withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodoAction}
)(List));
