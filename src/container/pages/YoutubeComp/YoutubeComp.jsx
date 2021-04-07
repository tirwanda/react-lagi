import React, { Component, Fragment } from 'react';
import YouTubeComp from '../../../component/YoutubeComp/YoutubeComponent';

class YoutubeComp extends Component {
	render() {
		return (
			<Fragment>
				<p>Youtbe Component</p>
				<hr />
				<YouTubeComp time="7.12" title="Tutprial React Js" />
				<YouTubeComp time="3.12" title="Tutorial Java" />
				<YouTubeComp time="13.15" title="Aplikasi Todo List" />
			</Fragment>
		);
	}
}

export default YoutubeComp;
