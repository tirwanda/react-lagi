import React, { Component } from 'react';
import { GlobalConsumer } from '../../../../context/Context';

class Counter extends Component {
	// state = {
	// 	order: 0,
	// 	name: 'edho',
	// };

	// handleCounterChange = (value) => {
	// 	this.props.onCounterChange(value);
	// };

	// handleMinus = () => {
	// 	if (this.state.order > 0) {
	// 		this.setState(
	// 			{
	// 				order: this.state.order - 1,
	// 			},
	// 			() => {
	// 				this.handleCounterChange(this.state.order);
	// 			}
	// 		);
	// 	}
	// };

	// handlePlus = () => {
	// 	this.setState(
	// 		{
	// 			order: this.state.order + 1,
	// 		},
	// 		() => {
	// 			this.handleCounterChange(this.state.order);
	// 		}
	// 	);
	// };

	render() {
		return (
			<div className="counter">
				<button
					className="plus"
					onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}
				>
					+
				</button>
				<input
					type="text"
					value={this.props.value.totalOrder}
					onChange={() => {}}
				/>
				<button
					className="minus"
					onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}
				>
					-
				</button>
			</div>
		);
	}
}

export default GlobalConsumer(Counter);
