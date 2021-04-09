import React from 'react';
import Counter from './Counter';
import ThumbNail from '../../../../assets/image/thumb-nail.jpg';

class CardProduct extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="img-thumb-prod">
					<img src={ThumbNail} alt="" />
				</div>
				<div className="product-title">PH Detection Sensor</div>
				<div className="product-price">Rp.305.000</div>
				<Counter
					onCounterChange={(value) =>
						this.props.onCounterChange(value)
					}
				/>
			</div>
		);
	}
}

export default CardProduct;
