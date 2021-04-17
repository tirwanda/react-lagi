import axios from 'axios';
import { OnlineRoot, RootPath } from './Config.js';

const Post = (path, root, data) => {
	const promise = new Promise((resolve, reject) => {
		axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
			(res) => {
				resolve(res.data);
			},
			(err) => {
				reject(err);
			}
		);
	});
	return promise;
};

export default Post;
