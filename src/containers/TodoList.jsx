import TodoItem from '../components/todoItem.jsx';
const { connect } = ReactRedux;
import { withRouter } from 'react-router'
import * as actions from '../actions/index.jsx';
import List from '../components/list.jsx';
import { filterTodos } from '../reducers/index.jsx'
import { fetchTodos } from '../fakeDB.jsx'

class TodoList extends React.Component {
  componentDidMount() {
    this.updateTodos();
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;
    if (filter != prevProps.filter) {
      this.updateTodos();
    }
  }

  updateTodos() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then((todos)=>
      this.props.receiveTodos(todos));
  }

  render() {
    const {toggleTodo, ...rest} = this.props;
    console.log(rest);
    return <List onTodoClick={ toggleTodo } { ...rest } />;
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    filter,
    todos: filterTodos(state, filter)
  };
};

TodoList = withRouter(connect(
  mapStateToProps,
  actions
)(TodoList));

export default TodoList;
