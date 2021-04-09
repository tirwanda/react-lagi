import React, { Component } from 'react';

class Counter extends Component {
	state = {
		order: 0,
		name: 'edho',
	};

	handleCounterChange = (value) => {
		this.props.onCounterChange(value);
	};

	handleMinus = () => {
		if (this.state.order > 0) {
			this.setState(
				{
					order: this.state.order - 1,
				},
				() => {
					this.handleCounterChange(this.state.order);
				}
			);
		}
	};

	handlePlus = () => {
		this.setState(
			{
				order: this.state.order + 1,
			},
			() => {
				this.handleCounterChange(this.state.order);
			}
		);
	};
	render() {
		return (
			<div className="counter">
				<button className="plus" onClick={this.handlePlus}>
					+
				</button>
				<input type="text" value={this.state.order} />
				<button className="minus" onClick={this.handleMinus}>
					-
				</button>
			</div>
		);
	}
}

export default Counter;
