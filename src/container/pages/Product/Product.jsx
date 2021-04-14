import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import { RootContext } from '../../Home/Home';

import Troli from '../../../assets/image/troli.png';
import Logo from '../../../assets/image/logo.png';
import CardProduct from './CardProduct/CardProduct';

import './Product.css';

class Product extends Component {
	render() {
		return (
			<RootContext.Consumer>
				{(value) => {
					return (
						<Fragment>
							<p>Halaman Product</p>
							<hr />
							<div className="header">
								<div className="logo">
									<img src={Logo} alt="" />
								</div>
								<div className="troley">
									<img src={Troli} alt="" />
									<div className="count">
										{value.state.totalOrder}
									</div>
								</div>
							</div>
							<CardProduct />
						</Fragment>
					);
				}}
			</RootContext.Consumer>
		);
	}
}

// Using Redux
// const mapStateToProps = (state) => {
// 	return {
// 		order: state.totalOrder,
// 	};
// };

// export default connect(mapStateToProps)(Product);

export default Product;
