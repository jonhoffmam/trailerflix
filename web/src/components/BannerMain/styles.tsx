import styled from 'styled-components';

const ContentAreaContainer = styled.section`	
	height: 100%;
	display: flex;
	align-items: center;	
	justify-content: center;
	position: relative;
	z-index: 10;	
	
	@media (max-width: 800px) {
		padding-top: 100px;
		flex-direction: column;
	}
`;

const OptionsContainer = styled.div`
		height: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;		
		position: relative;
		align-items: center;
		justify-content: none;

	span {
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
	}

	.BsVolume {
		cursor: pointer;

		height: 35px;
		width: 35px;
		color: #666;
		transition: color 0.2s;
	} 
	.BsVolume:hover {
		color: #FFF;
	}

	.buttonPlay {
		height: 38px;
		width: 120px;		
		display: flex;
		align-items: center;		
		flex-direction: row;
		margin-right: 12px;
		border-radius: 4px;
		background-color: #FFF;
		color: #000;
		border: 0;
		font-size: 16px;
		line-height: 50px;
		font-weight: bold;		
		outline-style: none;

		cursor: pointer;
		transition: background-color 0.2s;
	}
	.buttonPlay:hover {
		background-color: #CCC;
	}

	.buttonInfo {
		height: 38px;
		width: 200px;
		display: flex;
		align-items: center;		
		flex-direction: row;
		margin-right: 12px;
		border-radius: 4px;
		background-color: rgba(109,109,110,0.7);
		color: #FFF;
		border: 0;
		font-size: 16px;
		line-height: 50px;
		font-weight: bold;		
		outline-style: none;		

		cursor: pointer;
		transition: background-color 0.2s;
	}
	.buttonInfo:hover {
		background-color: rgba(109,109,110,0.5);
	}

	@media (max-width: 800px) {
		justify-content: center;
	}

`;
	
const ContentAreaContainerItem = styled.div`
	width: 50%;
	display: inline-block;
	margin-bottom: 50px;
	margin-left: 5%;
	margin-right: 5%;
	position: relative;
	
	@media (max-width: 800px) {
		width: 100%;
	}
`;

const ContentAreaContainerCategory = styled.h1`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 60px;
	line-height: 70px;
	display: flex;
	align-items: center;
	text-align: center;	
	display: inline-block; 
	padding: 25px;
	
	border-radius: 4px;

	@media (max-width: 800px) {
		display: none;
		font-size: 18px;
		padding: 10px;
	}
`;

const ContentAreaContainerDescription = styled.p`
	text-align: justify;
	text-shadow: 1px 1px 5px black;
	margin-bottom: 5px;
	@media (max-width: 800px) {
		display: none;
	}
`;

const ContentAreaContainerTitle = styled.h2`
	font-style: normal;
	font-weight: 300;
	font-size: 40px;
	line-height: 1;
	margin-top: 0;
	margin-bottom: 32px;
	text-shadow: 1px 1px 5px black;
	position: relative;
	img{
		position: relative;		
		height: 150px;
		margin-bottom: 8px;
	}	

	@media (max-width: 800px) {
		font-size: 32px;
		text-align: center;
	}
`;

interface Section {
	backgroundImage: string;
}

const BannerMainContainer = styled.section<Section>`
	height: 80vh;
	position: relative;
	color: #fff;
	/* background-image: ${({backgroundImage}) => `url(${backgroundImage})`};  */
	background-size: cover;
	background-position: center;	
	@media (max-width: 800px) {
		height: auto;
		min-height: 50vh;
	}

	&:after,
	&:before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		height: 20%;
	}

	&:before {
		top: 0;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}

	&:after {
		bottom: 0;		
		background: linear-gradient(0deg, #141414 0%, transparent 100%);
	}
`;

const WatchButton = styled.button`
	font-family: 'Roboto', sans-serif;
	box-sizing: border-box;
	cursor: pointer;
	padding: 16px 24px;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
	display: inline-block;
	border: 1px solid transparent;
	color: var(--black);
	background: var(--white);
	border-color: var(--black);
	transition: opacity .3s;
	display: none;
	margin: 0 auto;
	@media (max-width: 800px) {
		display: block;
	}
`;


export {
	ContentAreaContainer,
	ContentAreaContainerItem,
	ContentAreaContainerCategory,
	ContentAreaContainerDescription,
	ContentAreaContainerTitle,
	BannerMainContainer, 
	WatchButton,
	OptionsContainer
}