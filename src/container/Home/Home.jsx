import React from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComponent';
// import Product from '../Product/Product';
// import LifeCycleComp from '../../component/LifeCycleComponent/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends React.Component {
	state = {
		showComponent: true,
	};

	componentDidMount() {
		// setTimeout(() => {
		// 	this.setState({
		// 		showComponent: false,
		// 	});
		// }, 3000);
	}

	render() {
		return (
			<div>
				{/* <p>Youtube Component</p>
				<hr />
				<YoutubeComp time="3.22" title="Tutorial Arduino" />
				<YoutubeComp time="7.12" title="Tutorial STM32" />
				<YoutubeComp time="8.12" title="Turorial PLC" />
				<YoutubeComp time="2.24" title="Tutorial ATmega" />
				<YoutubeComp />
				<p>Counter</p>
				<hr />
				<Product /> */}
				{/* <p>LifeCycle Component</p>
				<hr />

				{this.state.showComponent ? <LifeCycleComp /> : null} */}
				<p>Blog Post</p>
				<hr />
				<BlogPost />
			</div>
		);
	}
}

export default Home;
