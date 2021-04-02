import React, { Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';

class BlogPost extends React.Component {
	render() {
		return (
			<Fragment>
				<p className="section-title">Blog Post</p>
				<Post title="title" desc="desc" />
			</Fragment>
		);
	}
}

export default BlogPost;
