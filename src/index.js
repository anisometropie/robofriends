import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';
import App from 'containers/App';
import { searchRobots } from 'reducers'

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
