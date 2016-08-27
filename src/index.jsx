import Root from './components/Root.jsx'
import configureStore from './configureStore.jsx'

ReactDOM.render(
  <Root store={ configureStore() } />,
  document.getElementById('root')
);
