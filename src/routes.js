import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Profile from './components/profile';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';


const routes = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Profile}/>
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default routes;
