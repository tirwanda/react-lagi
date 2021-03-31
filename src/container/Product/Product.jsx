import React, { Component, Fragment } from 'react';
import ThumbNail from '../../assets/image/thumb-nail.jpg';
import Troli from '../../assets/image/troli.png';
import Logo from '../../assets/image/logo.png';
import './Product.css';

class Product extends Component {
	render() {
		return (
			<Fragment>
				<div className="header">
					<div className="logo">
						<img src={Logo} alt="" />
					</div>
					<div className="troley">
						<img src={Troli} alt="" />
						<div className="count">3</div>
					</div>
				</div>

				<div className="card">
					<div className="img-thumb-prod">
						<img src={ThumbNail} alt="" />
					</div>
					<div className="product-title">PH Detection Sensor</div>
					<div className="product-price">Rp.305.000</div>
					<div className="counter">
						<button className="plus">+</button>
						<input type="text" value={3} />
						<button className="minus">-</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Product;
