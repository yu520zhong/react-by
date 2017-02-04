import React from 'react'
import { Router, Route, browserHistory,hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './app';
import servers from './servert'
import taps from './tap'


let enhancer = compose(
        applyMiddleware(thunk, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
);

const stores = createStore(servers,enhancer);

render(
	<Provider store={stores}>
		<Router history={browserHistory}>
	      <Route path="/" component={App} />
	      <Route path="tapgo" component={taps} />
	    </Router>
	</Provider>,
	document.getElementById('root')
	)                                                    



