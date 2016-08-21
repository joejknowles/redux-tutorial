import Link from './Link.jsx'
const { Component } = React

export default class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(()=>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const { filter, children } = this.props;
    const state = store.getState();
    return (
      <Link onClick={ ()=>
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        }) }
        active={ filter === state.visibilityFilter }
        >
        { children }
      </Link>
    );
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
