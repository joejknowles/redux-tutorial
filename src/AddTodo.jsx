import InputText from './InputText.jsx'
import { addTodoAction } from './Actions.jsx'
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
