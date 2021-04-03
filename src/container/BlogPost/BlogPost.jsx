import React, { Fragment } from 'react';
import axios from 'axios';
import Post from '../../component/Post/Post';
import './BlogPost.css';

class BlogPost extends React.Component {
	state = {
		post: [],
	};

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then((response) => response.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			post: json,
		// 		});
		// 	});

		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			this.setState({
				post: res.data,
			}).catch((err) => console.log(err));
		});
	}

	render() {
		return (
			<Fragment>
				<p className="section-title">Blog Post</p>
				{this.state.post.map((post) => {
					return (
						<Post
							title={post.title}
							desc={post.body}
							key={post.id}
						/>
					);
				})}
			</Fragment>
		);
	}
}

export default BlogPost;
