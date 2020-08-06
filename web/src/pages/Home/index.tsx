import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

interface POSTER {
	id: number;
	title: string;
	backdrop_path: string;
	poster_path: string;
	overview: string;
	results: [];	
}

interface VIDEO {
	id: number;	
	results: [];
	key: string;
}

interface GENRE {
	genres: [];
	id: number;
	name: string;
}

interface POSTER_GENRE {
	id: number;
	title: string;
	posters: [];
	mediaType: string;
}

const Home = () => {
	const { REACT_APP_TMDB_API_KEY: tmdbAPI  } = process.env;
	const [popularMovies, setPopularMovies] = useState<POSTER[]>([]);
	const [popularTV, setPopularTV] = useState<POSTER[]>([]);
	const [popularKidsMovies, setPopularKidsMovies] = useState<POSTER[]>([]);
	
	// const [genresMovies, setGenresMovies] = useState<GENRE[]>([]);
	// const [genresPostersMovies, setGenresPostersMovies] = useState<POSTER_GENRE[]>([]);

	const [trending, setTrending] = useState<POSTER[]>([]);
	const [youtubeID, setYoutubeID] = useState<VIDEO[]>([]);

	const movieDisplayBannerMain = popularMovies[0];


	useEffect(() => {
		async function fetchData() {
		
		const popularMovies = await axios.get<POSTER>(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbAPI}&language=pt-BR&page=1`);
			setPopularMovies(popularMovies.data.results)
		
		const popularTV = await axios.get<POSTER>(`https://api.themoviedb.org/3/tv/popular?api_key=${tmdbAPI}&language=pt-BR&page=1`);
			setPopularTV(popularTV.data.results);
		
		const popularKidsMovies = await axios.get<POSTER>(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPI}&language=pt-BR&sort_by=popularity.desc&certification_country=BR&certification=L&include_adult=false&include_video=true&page=1`);
			setPopularKidsMovies(popularKidsMovies.data.results);
			

		const trending = await axios.get<POSTER>(`https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbAPI}`);
			setTrending(trending.data.results);
			
		}
		fetchData();

	},[tmdbAPI]);


	useEffect(() => {
		async function fetchData() {
			if (popularMovies.length === 0) {
				return;
			}
			const youtubeID = await axios.get<VIDEO>(`https://api.themoviedb.org/3/movie/${movieDisplayBannerMain.id}/videos?api_key=${tmdbAPI}&language=pt-BR`);
				setYoutubeID(youtubeID.data.results);
		}
		fetchData();	
	},[popularMovies, tmdbAPI, movieDisplayBannerMain]);

	// useEffect(() => {
	// 	async function returnGenres() {		
	// 		const genres = await axios.get<GENRE>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbAPI}&language=pt-BR`)
			
	// 		setGenresMovies(genres.data.genres);			
	// 	}
	// 	returnGenres();		
	// },[tmdbAPI]);


	
		
		// async function returnPostersGenres(genreID: number) {
			
		// 	const discover = await axios.get<POSTER>(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPI}&language=pt-BR&sort_by=popularity.desc&certification_country=BR&include_adult=false&include_video=false&page=1&with_genres=${genreID}`);			
		// 	setGenresPostersMovies(discover.data.results);
		// }
		
		
		// const discoverFinal = genresMovies.map((genre, index) => {
		// 	returnPostersGenres(genre.id);
		// 	return {
		// 		id: index,
		// 		title: genre.name,
		// 		posters: genresPostersMovies,
		// 		mediaType: 'movies'
		// 	}
		// })	
	
	const composePosters = [
		{
			id: 0,
			title: 'Populares na Trailerflix - Filmes',
			posters: popularMovies,
			mediaType: 'movie',
		},
		{
			id: 1,
			title: 'Populares na Trailerflix - Séries',
			posters: popularTV,
			mediaType: 'tv',
		},
		{
			id: 2,
			title: 'Em alta',
			posters: trending,
			mediaType: 'all'
		},
		{
			id: 3,
			title: 'Populares na Trailerflix - Filmes Infantis',
			posters: popularKidsMovies,
			mediaType: 'movie'
		},
	];

// 	useEffect(() => {		
// 		console.log(discoverFinal);		
// },[discoverFinal]);	
	

	return (	
		<div style={{backgroundColor: '#141414'}}>
			<PageDefault>

				<BannerMain
					videoTitle={movieDisplayBannerMain?.title}
					backDropPath={movieDisplayBannerMain?.backdrop_path}
					mediaID={movieDisplayBannerMain?.id}
					youtubeID={youtubeID[0]?.key}					
					videoDescription={movieDisplayBannerMain?.overview}
				/>
			
				
				{
				// composePosters.length >= 24 && 
					composePosters.map(poster => (
					<Carousel
					key={poster.id}
					ignoreFirstVideo
					category={composePosters[poster.id]}
					/> 
				))
				}

			</PageDefault>

			

		</div>	
	)
}

export default Home;