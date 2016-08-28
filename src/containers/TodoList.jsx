import TodoItem from '../components/todoItem.jsx';
const { connect } = ReactRedux;
import { withRouter } from 'react-router'
import { toggleTodoAction } from '../actions/index.jsx';
import List from '../components/list.jsx';
import { filterTodos } from '../reducers/index.jsx'

const mapStateToProps = (state, { params }) => ({
  todos: filterTodos(state, params.filter)
});
export default withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodoAction}
)(List));
