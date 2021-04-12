import React, { Component } from 'react';
import { connect } from 'react-redux';

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
		console.log(this.props);
		return (
			<div className="counter">
				<button className="plus" onClick={this.props.handlePlus}>
					+
				</button>
				<input type="text" value={this.props.order} />
				<button className="minus" onClick={this.props.handleMinus}>
					-
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		order: state.totalOrder,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
		handleMinus: () => dispatch({ type: 'MINUS_ORDER' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
