import axios from 'axios';

const RootPath = 'http://localhost:3004';
const OnlineRoot = 'https://jsonplaceholder.typicode.com';

// posts?_sort=id&_order=desc
const Get = (path, root) => {
	const promise = new Promise((resolve, reject) => {
		axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
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

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
	getNewsBlog,
	getComments,
};

export default API;
