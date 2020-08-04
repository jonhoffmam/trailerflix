import React, { useState, useEffect } from 'react';
import { BsVolumeMute, BsVolumeUp, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import * as Styles from './styles';
import axios from 'axios';


interface FANART {
	hdmovielogo: [];
	movielogo: [];
	id: string;
	url: string;
}

const BannerMain = (props: any) => {
	const {videoTitle, backDropPath, mediaID, youtubeID, videoDescription} = props;	
	const {REACT_APP_FANART_API_KEY: fanartAPI} = process.env;

	const [playVideo, setPlayVideo] = useState(true);
	const [muteVideo, setMuteVideo] = useState(true);
	const [movieLogo, setMovieLogo] = useState<FANART[]>([]);
	
	const backgroundUrl = backDropPath === '' ? '' : `https://image.tmdb.org/t/p/original${backDropPath}`;
	
	useEffect(() => {
		
		async function fetchData() {
			const movieLogo = await axios.get<FANART>(`https://webservice.fanart.tv/v3/movies/${mediaID}?api_key=${fanartAPI}`)

			if (movieLogo.data.hdmovielogo) {
				setMovieLogo(movieLogo.data.hdmovielogo);
				return;
			}
			setMovieLogo(movieLogo.data.movielogo);
		}

	if (mediaID) {
		fetchData();			
	}
	},[mediaID, fanartAPI]);
	

	return (
		<Styles.BannerMainContainer backgroundImage={backgroundUrl}>			
			<VideoIframeResponsive playVideo={playVideo} muteVideo={muteVideo} youtubeID={youtubeID}/>
			
			<Styles.ContentAreaContainer >
				<Styles.ContentAreaContainerItem>
					<Styles.ContentAreaContainerTitle>
						{movieLogo.length !== 0 ? 
							<img							
								src={movieLogo[0].url}
								alt="Movie Logo"/>
							:
							''
						}
						<br/>
						{videoTitle}
					</Styles.ContentAreaContainerTitle>

					<Styles.ContentAreaContainerDescription>
						{videoDescription}
					</Styles.ContentAreaContainerDescription>
						<Styles.OptionsContainer>
						{!playVideo ? 	
							<button className="buttonPlay" onClick={() => setPlayVideo(!playVideo)}>
								<span style={{height: '38px', width: '38px'}}>
									<BsFillPlayFill style={{height: '25px', width: '25px'}} />
								</span>
								Assistir
							</button>
							:
							<button className="buttonPlay" onClick={() => setPlayVideo(!playVideo)}>
								<span style={{height: '38px', width: '38px'}}>
									<BsFillPauseFill style={{height: '25px', width: '25px'}} />
								</span>
								Pausar
							</button>
						}

							<button className="buttonInfo" >
								<span style={{height: '38px', width: '38px'}}>
									<FiInfo style={{height: '25px', width: '25px'}} />
								</span>
								Mais Informações
							</button>
							<span>
								{muteVideo ?
									<BsVolumeMute className="BsVolume" onClick={() => setMuteVideo(!muteVideo)} />
									:
									<BsVolumeUp className="BsVolume" onClick={() => setMuteVideo(!muteVideo)} />
								}
							</span>
						</Styles.OptionsContainer>
				</Styles.ContentAreaContainerItem>
				

				<Styles.ContentAreaContainerItem>
					{/* <VideoIframeResponsive
						youtubeID={movieKey}
					/> */}
					<Styles.WatchButton>
						+ Informações
					</Styles.WatchButton>
				</Styles.ContentAreaContainerItem>
			</Styles.ContentAreaContainer>
			
			
		</Styles.BannerMainContainer>
	);
}


export default BannerMain;