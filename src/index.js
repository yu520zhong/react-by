import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './app'
import store from './tobot'

const stores = createStore(store)

stores.subscribe(function () {
    console.log(stores.getState());
});

render(
  <Provider store={stores}>
  	<App/>
  </Provider>,
  document.getElementById('root')
)
