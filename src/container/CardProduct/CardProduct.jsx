import React from 'react';
import ThumbNail from '../../assets/image/thumb-nail.jpg';

class CardProduct extends React.Component {
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
			<div className="card">
				<div className="img-thumb-prod">
					<img src={ThumbNail} alt="" />
				</div>
				<div className="product-title">PH Detection Sensor</div>
				<div className="product-price">Rp.305.000</div>
				<div className="counter">
					<button className="plus" onClick={this.handlePlus}>
						+
					</button>
					<input type="text" value={this.state.order} />
					<button className="minus" onClick={this.handleMinus}>
						-
					</button>
				</div>
			</div>
		);
	}
}

export default CardProduct;
