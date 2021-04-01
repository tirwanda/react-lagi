import React, { Component, Fragment } from 'react';

import Troli from '../../assets/image/troli.png';
import Logo from '../../assets/image/logo.png';
import CardProduct from '../CardProduct/CardProduct';

import './Product.css';

class Product extends Component {
	state = {
		order: 0,
	};

	handleCounterChange = (newValue) => {
		this.setState({
			order: newValue,
		});
	};

	render() {
		return (
			<Fragment>
				<div className="header">
					<div className="logo">
						<img src={Logo} alt="" />
					</div>
					<div className="troley">
						<img src={Troli} alt="" />
						<div className="count">{this.state.order}</div>
					</div>
				</div>
				<CardProduct
					onCounterChange={(value) => this.handleCounterChange(value)}
				/>
			</Fragment>
		);
	}
}

export default Product;
