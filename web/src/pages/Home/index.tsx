import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json';

const Home = () => {	

	return (
		<div style={{backgroundColor: '#141414'}}>
			<Menu />

			 <BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				// videDescription={"O que é Front-end?"}
			/>
			
			{dadosIniciais.categorias.map(item => (
				<Carousel
				ignoreFirstVideo
				category={dadosIniciais.categorias[item.id]}
			/>
			))}
			

		</div>
	)
}

export default Home;