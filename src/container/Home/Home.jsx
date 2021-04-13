import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComponent';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComponent/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeComp from '../pages/YoutubeComp/YoutubeComp';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
	state = {
		totalOrder: 0,
	};

	render() {
		return (
			<Router>
				<Provider value={this.state}>
					<Fragment>
						<div className="navigation">
							<Link to="/">Blog Post</Link>
							<Link to="/product">Product</Link>
							<Link to="/lifecycle">Life Cycle</Link>
							<Link to="/youtube">Youtube</Link>
						</div>
						<Route path="/" exact component={BlogPost} />
						<Route path="/product" component={Product} />
						<Route path="/lifecycle" component={LifeCycleComp} />
						<Route path="/youtube" component={YoutubeComp} />
						<Route path="/detail-post/:id" component={DetailPost} />
					</Fragment>
				</Provider>
			</Router>
		);
	}
}

export default Home;
