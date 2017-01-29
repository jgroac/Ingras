import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Layout from './containers/Layout';
import Login from './components/Login';
import Profile from './components/profile';
import NotFoundPage from './components/NotFoundPage';

const dashboard = () => <div></div>;

const routes = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Login}/>
          <Route path="/dashboard" component={dashboard} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default routes;
