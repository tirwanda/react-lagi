import React, { Fragment } from 'react';
import axios from 'axios';
import Post from '../../component/Post/Post';
import './BlogPost.css';

class BlogPost extends React.Component {
	state = {
		post: [],
		blogPost: {
			id: 1,
			title: '',
			body: '',
		},
	};

	getPostApi = () => {
		axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then(
			(res) => {
				this.setState({
					post: res.data,
				});
			},
			(err) => console.log(err)
		);
	};

	postDataToApi = () => {
		axios
			.post('http://localhost:3004/posts', this.state.blogPost)
			.then((res) => {
				console.log(res);
				this.getPostApi();
			})
			.catch((err) => console.log(err));
	};

	handleRemove = (data) => {
		axios
			.delete(`http://localhost:3004/posts/${data}`)
			.then((res) => this.getPostApi());
	};

	handleFormChange = (event) => {
		let newBlogPost = { ...this.state.blogPost };
		let timeStamp = new Date().getTime();
		newBlogPost[event.target.name] = event.target.value;
		newBlogPost['id'] = timeStamp;

		this.setState({
			blogPost: newBlogPost,
		});
	};

	handleSubmit = () => {
		this.postDataToApi();
	};

	componentDidMount() {
		/****************************** 
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					post: json,
				});
			});
		***********************************/
		this.getPostApi();
	}

	render() {
		return (
			<Fragment>
				<p className="section-title">Blog Post</p>
				<div className="form-add-post">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						onChange={this.handleFormChange}
						placeholder="Add Title Here"
					/>
					<label htmlFor="body">Description</label>
					<textarea
						type="text"
						name="body"
						onChange={this.handleFormChange}
						id="body"
						placeholder="Add Description Here"
					/>
					<button className="btn-submit" onClick={this.handleSubmit}>
						Save
					</button>
				</div>
				{this.state.post.map((post) => {
					return (
						<Post
							data={post}
							remove={this.handleRemove}
							key={post.id}
						/>
					);
				})}
			</Fragment>
		);
	}
}

export default BlogPost;
