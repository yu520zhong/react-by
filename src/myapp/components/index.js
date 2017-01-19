import React from 'react'
import { Router, Route, browserHistory,hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './myapp'
import servers from './servers'
import Todom from './todom'


const stores = createStore(servers)

render(
	<Provider store={stores}>
		<Router history={hashHistory}>
	      <Route path="/" component={App} />
	      <Route path='message' component={Todom}/>
	    </Router>
	</Provider>,
	document.getElementById('root')
	)                                                    
