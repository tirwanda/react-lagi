const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	value: 0,
	age: 23,
};

// Reducer = Fungsi yang akan merubah store
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_AGE':
			return {
				...state,
				age: state.age + 1,
			};

		case 'CHANGE_VALUE':
			return {
				...state,
				value: state.value + action.newValue,
			};

		default:
			return state;
	}
};

// Create Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription = Proses pemanggilan store yang di perlukan
store.subscribe(() => {
	console.log('Store Change: ', store.getState());
});

// Dispatch Action = Fungsi untuk menambah 1 value di store
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({
	type: 'CHANGE_VALUE',
	newValue: 12,
});
console.log(store.getState());
