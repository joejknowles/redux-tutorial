const { Component } = React

export default class TodoItem extends Component {
  render() {
    const { todoItem, store } = this.props
    const tick = todoItem.completed ? <span>✓</span> : null;
    return (<li onClick={ () => store.dispatch({type: 'TOGGLE_TODO', id: todoItem.id}) }>
      {todoItem.name}
      { tick }
    </li>)
  }
}
