import React from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComponent';
import Product from '../Product/Product';

class Home extends React.Component {
	render() {
		return (
			<div>
				<p>Youtube Component</p>
				<hr />
				<YoutubeComp time="3.22" title="Tutorial Arduino" />
				<YoutubeComp time="7.12" title="Tutorial STM32" />
				<YoutubeComp time="8.12" title="Turorial PLC" />
				<YoutubeComp time="2.24" title="Tutorial ATmega" />
				<YoutubeComp />
				<p>Counter</p>
				<hr />
				<Product />
			</div>
		);
	}
}

export default Home;
