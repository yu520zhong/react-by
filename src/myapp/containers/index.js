import React from 'react'
import { Router, Route, browserHistory,hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';




let enhancer = compose(
        applyMiddleware(thunk, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
);

const stores = createStore(servers,enhancer)

render(
	<Provider store={stores}>
		<Router history={hashHistory}>
	      <Route path="/" component={App} />
	    </Router>
	</Provider>,
	document.getElementById('root')
	)                                                    
