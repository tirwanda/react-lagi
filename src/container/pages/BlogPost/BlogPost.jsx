import React, { Fragment } from 'react';
import axios from 'axios';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import API from '../../../services';

class BlogPost extends React.Component {
	state = {
		post: [],
		blogPost: {
			id: 1,
			title: '',
			body: '',
		},
		isUpdate: false,
		comments: [],
	};

	getPostApi = () => {
		API.getNewsBlog().then((res) => {
			this.setState({
				post: res,
			});
		});

		API.getComments().then((res) => {
			this.setState({
				comments: res,
			});
		});

		// axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then(
		// 	(res) => {
		// 		this.setState({
		// 			post: res.data,
		// 		});
		// 	},
		// 	(err) => console.log(err)
		// );
	};

	postDataToApi = () => {
		axios
			.post('http://localhost:3004/posts', this.state.blogPost)
			.then((res) => {
				this.getPostApi();
				this.setState({
					blogPost: {
						id: 1,
						title: '',
						body: '',
					},
				});
			})
			.catch((err) => console.log(err));
	};

	handleRemove = (data) => {
		axios
			.delete(`http://localhost:3004/posts/${data}`)
			.then((res) => this.getPostApi());
	};

	handleUpdate = (data) => {
		this.setState({
			blogPost: data,
			isUpdate: true,
		});
	};

	putDataToApi = (data) => {
		axios
			.put(`http://localhost:3004/posts/${data}`, this.state.blogPost)
			.then((res) => {
				this.getPostApi();
				this.setState({
					isUpdate: false,
					blogPost: {
						id: 1,
						title: '',
						body: '',
					},
				});
			});
	};

	handleFormChange = (event) => {
		let newBlogPost = { ...this.state.blogPost };
		let timeStamp = new Date().getTime();
		newBlogPost[event.target.name] = event.target.value;
		if (!this.state.isUpdate) {
			newBlogPost['id'] = timeStamp;
		}

		this.setState({
			blogPost: newBlogPost,
		});
	};

	handleSubmit = () => {
		if (this.state.isUpdate) {
			this.putDataToApi(this.state.blogPost.id);
		} else {
			this.postDataToApi();
		}
	};

	handleDetail = (id) => {
		this.props.history.push(`/detail-post/${id}`);
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
				<p>Halaman Blog Post</p>
				<hr />
				<p className="section-title">Blog Post</p>
				<div className="form-add-post">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						value={this.state.blogPost.title}
						name="title"
						onChange={this.handleFormChange}
						placeholder="Add Title Here"
					/>
					<label htmlFor="body">Description</label>
					<textarea
						type="text"
						value={this.state.blogPost.body}
						name="body"
						onChange={this.handleFormChange}
						id="body"
						placeholder="Add Description Here"
					/>
					<button className="btn-submit" onClick={this.handleSubmit}>
						Save
					</button>
				</div>
				{this.state.comments.map((comment) => {
					return (
						<p>
							{comment.name} - {comment.email}
						</p>
					);
				})}
				{this.state.post.map((post) => {
					return (
						<Post
							data={post}
							remove={this.handleRemove}
							update={this.handleUpdate}
							toDetail={this.handleDetail}
							key={post.id}
						/>
					);
				})}
			</Fragment>
		);
	}
}

export default BlogPost;
