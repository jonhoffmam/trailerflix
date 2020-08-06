import React from 'react';

import { ResponsiveIframe } from './styles';

const YouTubeIframeResponsive = (props: any) => {
	const {youtubeID, playVideo, muteVideo} = props;
	
	return (
		<>		

			<ResponsiveIframe
				url={`https://www.youtube.com/watch?v=${youtubeID}`}
				width='100%'
				height='100%'
				playing={playVideo}
				muted={muteVideo}
			>
				
			</ResponsiveIframe>
		</>
	);
}

export default YouTubeIframeResponsive;
