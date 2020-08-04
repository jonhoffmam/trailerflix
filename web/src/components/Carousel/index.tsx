import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import Slider, { SliderItem } from './components/Slider';
// import VideoCard from './components/VideoCard';

const Carousel = (props: any) => {
	const {ignoreFirstVideo, category} = props;
	const categoryTitle = category.title;	
	// const categoryExtraLink = category.link_extra;
	// const videos = category.videos;

	function handleSetType(posterID: number, posterMediaType: string, categoryType: string) {		
		return (
			categoryType === 'all' ? 
			`https://www.themoviedb.org/${posterMediaType}/${posterID}` :
			`https://www.themoviedb.org/${categoryType}/${posterID}`
		)
	}

	// categoryType === 'all' ? 
	// 		`https://www.themoviedb.org/${poster.media_type}/${poster.id}` :
	// 		`https://www.themoviedb.org/${categoryType}/${poster.id}`

	return (
		<VideoCardGroupContainer>
			{categoryTitle && (
				<>
					<Title >
						{categoryTitle}
					</Title>
					{/* {categoryExtraLink && 
						<ExtraLink href={categoryExtraLink.url} target="_blank">
							{categoryExtraLink.text}  
						</ExtraLink>
					} */}
				</>
			)}
			<Slider>
				{category.posters.map((poster: any, index: number) => {
					if (ignoreFirstVideo && index === 0 && category.id === 0) {
            return null;
          }
					return (
						<SliderItem
							key={poster.id}
						>
							<a 
								href={handleSetType(poster.id, poster.media_type, category.mediaType)}
								rel="noopener noreferrer"
								target="_blank" >
								<img src={`https://image.tmdb.org/t/p/w185${poster.poster_path}`} alt={poster.title}/>
							</a>
						</SliderItem>
					)
				})}
			</Slider>
		</VideoCardGroupContainer>
	);
}

export default Carousel;
