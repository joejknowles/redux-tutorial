import InputText from '../components/InputText.jsx'
import { addTodo } from '../actions/index.jsx'
const { Component } = React;
const { connect } = ReactRedux;

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (name) => {
      dispatch(addTodo(name))
    }
  };
};

export default connect(null, mapDispatchToProps)(InputText);
