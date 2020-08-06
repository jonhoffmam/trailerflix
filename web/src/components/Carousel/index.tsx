import React from 'react';
import { useHistory } from 'react-router-dom';

import { VideoCardGroupContainer, Title } from './styles';
import Slider, { SliderItem } from './components/Slider';


const Carousel = (props: any) => {
	const {ignoreFirstVideo, category} = props;
	const categoryTitle = category.title;

	const history = useHistory();

	function handleSetType(posterID: number, posterMediaType: string, categoryType: string) {		
		return (
			categoryType === 'all' ? 
			history.push(`/${posterMediaType}/${posterID}`) :
			history.push(`/${categoryType}/${posterID}`)
		)
	}

	return (
		<VideoCardGroupContainer>
			{categoryTitle && (
				<>
					<Title >
						{categoryTitle}
					</Title>					
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
							{/* <a
								href={handleSetType(poster.id, poster.media_type, category.mediaType)}
								rel="noopener noreferrer"
								target="_blank" > */}
								{/* <Link to={} > */}
								<img onClick={() => handleSetType(poster.id, poster.media_type, category.mediaType)} src={`https://image.tmdb.org/t/p/w185${poster.poster_path}`} alt={poster.title}/>
								{/* </Link> */}
							{/* </a> */}
						</SliderItem>
					)
				})}
			</Slider>
		</VideoCardGroupContainer>
	);
}

export default Carousel;
