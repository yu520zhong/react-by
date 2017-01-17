import React from 'react'
import { Router, Route, browserHistory,hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './app'

const start = createStore()


render(

	<Provider strot={start}>
			<Router>
				<Route path='/' component={App}>
			</Router>
	</Provider>
	)