import InputText from './InputText.jsx'
const { Component } = React;
let nextTodoId = 0;

export default class AddTodo extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(()=> this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {store} = this.context;
    return(
      <InputText onAddTodo={ (name) => store.dispatch({type: 'ADD_TODO', id: ++nextTodoId, name}) }>
        Add Todo
      </InputText>
    );
  }
}

AddTodo.contextTypes = {
  store: React.PropTypes.object
}
