import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { createLogger } from 'redux-logger';
import Index from './containers/';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    );
  }
}
