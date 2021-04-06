import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComponent';
import Product from '../Product/Product';
import LifeCycleComp from '../../component/LifeCycleComponent/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends React.Component {
	state = {
		showComponent: true,
	};

	render() {
		return (
			<Router>
				<div className="navigation">
					<Link to="/">Blog Post</Link>
					<Link to="/product">Product</Link>
					<Link to="/lifecycle">Life Cycle</Link>
				</div>
				<Route path="/" exact component={BlogPost} />
				<Route path="/product" component={Product} />
				<Route path="/lifecycle" component={LifeCycleComp} />
			</Router>
		);
	}
}

export default Home;
