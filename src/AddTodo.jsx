import InputText from './InputText.jsx'
const { Component } = React;
const { connect } = ReactRedux;
let nextTodoId = 0;

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (name) => {
      dispatch({type: 'ADD_TODO', id: ++nextTodoId, name})
    }
  };
};

export default connect(null, mapDispatchToProps)(InputText);
