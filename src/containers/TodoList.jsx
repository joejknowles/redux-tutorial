import TodoItem from '../components/todoItem.jsx';
const { connect } = ReactRedux;
import { withRouter } from 'react-router'
import * as actions from '../actions/index.jsx';
import List from '../components/list.jsx';
import { filterTodos, getIsFetching, getErrorMessage } from '../reducers/index.jsx'
import FetchError from '../components/fetchError.jsx'

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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter).then(() => console.log('done'));
  }

  render() {
    const {toggleTodo, errorMessage, todos, isFetching, ...rest} = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length){
      return <FetchError
        message={ errorMessage }
        onRetry={ this.updateTodos.bind(this) } />;
    }
    return <List
      onTodoClick={ toggleTodo }
      todos={ todos } />;
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    filter,
    todos: filterTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter)
  };
};

TodoList = withRouter(connect(
  mapStateToProps,
  actions
)(TodoList));

export default TodoList;
