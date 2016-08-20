const { Component } = React;

export default class FilterTodos extends Component {
  createFilterLink(text, type, currentFilter) {
    if (type !== currentFilter){
      return <a onClick={ () => {
          this.props.store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: type})
        }}>{ text }</a>
    } else {
      return <span>{ text }</span>
    }
  }
  render() {
    const currentFilter = this.props.store.getState().visibilityFilter
    return (
      <div>
        {this.createFilterLink('Show All', 'SHOW_ALL', currentFilter)}
        {this.createFilterLink('Show Completed', 'COMPLETED', currentFilter)} 
        {this.createFilterLink('Show Todo', 'TODO', currentFilter)}
      </div>
    );
  }
}
