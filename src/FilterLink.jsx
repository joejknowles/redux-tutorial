import Link from './Link.jsx'
import store from './store.jsx'
const { Component } = React

export default class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
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
