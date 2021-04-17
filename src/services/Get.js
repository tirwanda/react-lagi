import axios from 'axios';
import { OnlineRoot, RootPath } from './Config';

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

export default Get;
