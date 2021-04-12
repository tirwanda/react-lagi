import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import { Provider } from 'react-redux';

const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
	totalOrder: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
	if (action.type === 'PLUS_ORDER') {
		return {
			...state,
			totalOrder: state.totalOrder + 1,
		};
	}

	if (action.type === 'MINUS_ORDER') {
		if (state.totalOrder > 0) {
			return {
				...state,
				totalOrder: state.totalOrder - 1,
			};
		}
	}
	return state;
};

// Store
const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
