import App from './app.jsx'
const { Provider } = ReactRedux;
import { Router, Route, browserHistory } from 'react-router';

const helloApp = ({}) => {
  return <div>hello!</div>
}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/(:filter)" component={ App }/>
      <Route path="/hello" component={ helloApp }/>
    </Router>
  </Provider>
);

export default Root;
