import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const VideoContainer = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	padding-top: 56.25%;
	background-color: red;
	@media (max-width: 800px) {
		display: none;
	}
`;

// export const ResponsiveIframe = styled.iframe`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
// `;

export const ResponsiveIframe = styled(ReactPlayer)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;	
`;