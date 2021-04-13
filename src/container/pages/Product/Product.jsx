import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';

import Troli from '../../../assets/image/troli.png';
import Logo from '../../../assets/image/logo.png';
import CardProduct from './CardProduct/CardProduct';

import './Product.css';

class Product extends Component {
	render() {
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
						<div className="count">{0}</div>
					</div>
				</div>
				<CardProduct />
			</Fragment>
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
