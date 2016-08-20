const { Component } = React;

export default class FilterTodos extends Component {
  createFilterLink(text, type, currentFilter) {
    if (type !== currentFilter){
      return <a style={ {textDecoration: 'underline', cursor: 'pointer' } }
        onClick={ () => {
          this.props.store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: type})
        }}>{ text }</a>
    } else {
      return <span>{ text }</span>
    }
  }
  render() {
    const currentFilter = this.props.store.getState().visibilityFilter
    return (
      <div style={{color:'blue'}}>
        {this.createFilterLink('Show All', 'SHOW_ALL', currentFilter)}
        &nbsp;
        {this.createFilterLink('Show Completed', 'COMPLETED', currentFilter)}
        &nbsp;
        {this.createFilterLink('Show Todo', 'TODO', currentFilter)}
      </div>
    );
  }
}
