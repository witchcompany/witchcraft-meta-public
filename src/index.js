import React from 'react';
import ReactGA from "react-ga4";
import { render } from 'react-dom';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import routers from '../routers';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import createRootReducer from './reducers'
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

export const history = createBrowserHistory();

const composeEnhancers = (process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);
ReactGA.initialize("G-CFVPFRLN6J");
ReactGA.send("pageview");


render(
  <ReactKeycloakProvider authClient={keycloak}>
    <IntlProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
          {routers.map(({path, component, exact}, index) => {
            return (
              <Route key={index} exact={exact} path={path} component={component} />
          )})}
          </Switch>
        </ConnectedRouter>
      </Provider>
    </IntlProvider>
  </ReactKeycloakProvider>,

  document.getElementById('root')
);