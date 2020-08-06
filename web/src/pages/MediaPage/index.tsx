import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PageDefault from '../../components/PageDefault';
import VideoIframeResponsive from '../../components/VideoIframeResponsive';

interface MEDIA {
	title: string;
	name: string;
	original_title: string;
	homepage: string;
}

interface TVDB {
	tvdb_id: number;
}

interface VIDEO {
	id: number;	
	results: [];
	key: string;
}

interface FANART {
	hdmovielogo: [];
	movielogo: [];
	hdtvlogo: [];
	tvlogo: [];
	lang: string;
	id: string;
	url: string;
}

const MediaPage = () => {
	const { REACT_APP_TMDB_API_KEY: tmdbAPI  } = process.env;
	const {REACT_APP_FANART_API_KEY: fanartAPI} = process.env;
	const { mediaType, mediaID } = useParams();

	const [tvdbID, setTvdbID] = useState<number>();

	const [playVideo, setPlayVideo] = useState(false);
	const [muteVideo, setMuteVideo] = useState(false);

	const [infoMedia, setInfoMedia] = useState<MEDIA>();
	const [youtubeID, setYoutubeID] = useState<VIDEO[]>([]);
	const [mediaLogo, setMediaLogo] = useState<FANART[]>([]);


	useEffect(() => {
		if (mediaType === 'movie') {
			return;
		}

		async function fetchData() {
			const tvdbID = await axios.get<TVDB>(`https://api.themoviedb.org/3/tv/${mediaID}/external_ids?api_key=${tmdbAPI}`);
			setTvdbID(tvdbID.data.tvdb_id);
		}

		fetchData();
	},[mediaType, mediaID, tmdbAPI]);

	useEffect(() => {
		async function fetchData() {
			const infoMedia = await axios.get<MEDIA>(`https://api.themoviedb.org/3/${mediaType}/${mediaID}?api_key=${tmdbAPI}&language=pt-BR`)
			setInfoMedia(infoMedia.data);
			
			const youtubeID = await axios.get<VIDEO>(`https://api.themoviedb.org/3/${mediaType}/${mediaID}/videos?api_key=${tmdbAPI}&language=pt-BR`);
			setYoutubeID(youtubeID.data.results);			

		if (mediaType === 'tv' && !tvdbID) {
			return;
		}

		
			try {
				const mediaLogo = 
					await axios.get<FANART>
						(`https://webservice.fanart.tv/v3/${mediaType === 'movie' ? 'movies' : mediaType}/${mediaType === 'tv' ? tvdbID : mediaID}?api_key=${fanartAPI}`)
				// return mediaLogo;
			
				const movieLogo: any = mediaLogo.data.hdmovielogo ? mediaLogo.data.hdmovielogo : mediaLogo.data.movielogo;
				const tvLogo: any = mediaLogo.data.hdtvlogo ? mediaLogo.data.hdtvlogo : mediaLogo.data.tvlogo;
				

					if (movieLogo && movieLogo[0].lang === 'en') {
						setMediaLogo(movieLogo);					
						return;
					} else if (tvLogo && tvLogo[0].lang === 'en') {
						setMediaLogo(tvLogo);					
						return;
					}
			} catch (err) {
				console.log('Erro:', err);
				return;
			}
			
		}
		
		fetchData();
	},[mediaType, mediaID, tvdbID, tmdbAPI, fanartAPI]);
	
	

	return (
		<PageDefault>
			<div>
			{mediaLogo.length !== 0 ? 
				<img src={mediaLogo[0].url} alt="Media Logo"/>
				: ''
			}			
			</div>

			<div style={{width: '500px', height: '500px', position: 'relative', display: 'flex'}}>
				<VideoIframeResponsive playVideo={playVideo} muteVideo={muteVideo} youtubeID={youtubeID[0]?.key}/>
				<button onClick={() => setPlayVideo(!playVideo)} >Play</button>
				<button onClick={() => setMuteVideo(!muteVideo)} >Mute</button>
			</div>

			<h1>{mediaType === 'movie' ? infoMedia?.title : infoMedia?.name}</h1>
			<p>{infoMedia?.homepage}</p>
			<p>{youtubeID[0]?.key}</p>

			

		</PageDefault>
	)
}

export default MediaPage;