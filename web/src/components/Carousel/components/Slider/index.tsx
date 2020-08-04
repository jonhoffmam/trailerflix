import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
	padding: 0;
	margin: 0;
	.slick-prev,
	.slick-next {
		z-index: 50;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 30px;
		height: 30px;
		transform: initial;
		&:before {
			font-size: 30px;
		}
	}
	
	.slick-prev {
		left: 0;
	}
	.slick-next {
		right: 16px;
	}
`;

export const SliderItem = styled.li`
	/* margin-right: 16px; */
	img {
		margin: 8px;
		/* width: 298px;
		height: 197px; */
		object-fit: cover;
		border-radius: 4px;
	}
`;


const Slider = (props: any) => {
	const {children} = props;
	const [afterChange, setAfterChange] = useState<number>(4);

	return (
		<Container>
			<SlickSlider {...{
				dots: false,				
				infinite: true,
				speed: 400,				
				variableWidth: true,
				adaptiveHeight: false,
				swipeToSlide: true,				
				slidesToScroll: afterChange,			
				afterChange: (index) => {
					let newIndex = index + 4;				
					
					if (index === 0) {
						setAfterChange(4);
					}
					if ( index >= 16 && newIndex >= 20 ) {
						setAfterChange(20 - (newIndex-3));						
					}
					if (newIndex === 23) {
						setAfterChange(1);
					}					
				}
			}}
			>
				{children}
			</SlickSlider>
		</Container>
)};

export default Slider; 