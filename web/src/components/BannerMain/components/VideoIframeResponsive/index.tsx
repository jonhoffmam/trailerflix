import React from 'react';

import { ResponsiveIframe } from './styles';

const YouTubeIframeResponsive = (props: any) => {
	const {youtubeID, playVideo, muteVideo} = props;
	
	return (
		<>
			{/* <ReactPlayer 
				url={"https://www.youtube.com/embed/lWImVp38gy4?autoplay=1&controls=0&mute=1&rel=0&loop=1&playlist=lWImVp38gy4"}
				width='100%'
				height='100%'
			/> */}

		

			<ResponsiveIframe
				url={`https://www.youtube.com/watch?v=${youtubeID}`}
				width='100%'
				height='100%'
				playing={playVideo}
				muted={muteVideo}
				// title="Titulo do Iframe"
				// // src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0`}
				// src={"https://www.youtube.com/embed/lWImVp38gy4?autoplay=1&controls=0&mute=1&rel=0&loop=1&playlist=lWImVp38gy4"}
				// frameBorder="0"
				// allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				// allowFullScreen
			>
				{/* <VideoContainer /> */}
			</ResponsiveIframe>
		</>
	);
}

export default YouTubeIframeResponsive;
