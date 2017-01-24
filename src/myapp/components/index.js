import React from 'react'
import { Router, Route, browserHistory,hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './myapp'
import servers from './servers'
import Todom from './todom'
import ppst from './todoss'

let enhancer = compose(
        applyMiddleware(thunk, createLogger()),
        // applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
);

const stores = createStore(servers,enhancer)

render(
	<Provider store={stores}>
		<Router history={hashHistory}>
	      <Route path="/" component={App} />
	      <Route path='message' component={Todom}/>
	      <Route path='ppst' component={ppst}/>
	    </Router>
	</Provider>,
	document.getElementById('root')
	)                                                    
