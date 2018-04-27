import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import HomePage from './routes/HomePage';
import Page404 from './routes/404Page';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/homepage" exact component={HomePage}/>
        {/*<Route path="/">*/}
          {/*<NavigationPage>*/}
            {/*<Switch>*/}
            {/*</Switch>*/}
          {/*</NavigationPage>*/}
        {/*</Route>*/}
        <Route path='*' exact component={Page404}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
