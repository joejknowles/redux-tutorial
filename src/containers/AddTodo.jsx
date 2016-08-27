import InputText from '../components/InputText.jsx'
import { addTodoAction } from '../actions/index.jsx'
const { Component } = React;
const { connect } = ReactRedux;

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (name) => {
      dispatch(addTodoAction(name))
    }
  };
};

export default connect(null, mapDispatchToProps)(InputText);
