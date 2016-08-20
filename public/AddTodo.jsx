const { Component } = React;
let nextTodoId = 0;

export default class AddTodo extends Component {
  render() {
    const { store } = this.props;
    return(
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (this.input.value) {
              store.dispatch({type: 'ADD_TODO', name: this.input.value, id: ++nextTodoId});
              this.input.value = '';
            }
          }
        }>
          <input
          autoFocus={true}
          ref={(node)=> this.input = node}/>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
