import React, { Fragment } from 'react';
import { GlobalConsumer } from '../../../context/Context';

import './LifeCycleComp.css';

class LifeCycleComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		};

		console.log('constructor');
	}

	changeCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
		console.log('click');
	};

	static getDrivedStateFromProps(props, state) {
		console.log('getDrivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount');
		// this.setState({
		// 	count: 2,
		// });
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		// console.log('nextProps', nextProps);
		console.log('nextState', nextState);
		console.log('State: ', this.state);
		if (nextState.count >= 4) {
			return false;
		}
		console.groupEnd();
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		console.log('Render');
		return (
			<Fragment>
				<p>Life Cycle Component</p>
				<hr />
				<button className="btn" onClick={() => this.changeCount()}>
					Componet Button {this.state.count}
				</button>
				<hr />
				<p>Total Order: {this.props.value.totalOrder}</p>
			</Fragment>
		);
	}
}

export default GlobalConsumer(LifeCycleComp);
