import axios from 'axios';
import React, { Component, Fragment } from 'react';
import './DetailPost.css';

class DetailPost extends Component {
	state = {
		post: {
			id: 1,
			title: '',
			body: '',
		},
	};
	componentDidMount() {
		let id = this.props.match.params.id;
		axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
			this.setState({
				post: res.data,
			});
		});
	}
	render() {
		// console.log(this.props);
		return (
			<div className="detail-wrapper">
				<p className="detail-title">{this.state.post.title}</p>
				<p className="detail-body">{this.state.post.body}</p>
			</div>
		);
	}
}

export default DetailPost;
