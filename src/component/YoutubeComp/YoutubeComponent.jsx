import React from 'react';
import './YoutubeComp.css';
import thumbNail from '../../assets/image/thumb-nail.jpg';

const YoutubeComp = (props) => {
	return (
		<div className="youtube-wrapper">
			<div className="img-thumb-yt">
				<img src={thumbNail} alt="" />
				<p className="time">{props.time}</p>
			</div>
			<p className="title">{props.title}</p>
			<p className="desc">Description</p>
		</div>
	);
};

YoutubeComp.defaultProps = {
	time: '00.00',
	title: 'Title Not Found',
};

export default YoutubeComp;
