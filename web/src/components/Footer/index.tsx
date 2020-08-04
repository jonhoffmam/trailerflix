import React from 'react';
import { FooterBase, Icon, Text } from './styles';

import logo from '../../assets/logo.svg';

const Footer = () => {
	return (
		<FooterBase>
			<a href="/">
				<img style={{height: '30px'}} src={logo} alt="Logo Trailerflix" />
			</a>
			<Text>
				Desenvolvido com <Icon /> por 
				
				<a style={{color: 'var(--frontEnd)', textDecoration: 'none', fontWeight: 'bold'}} href="https://www.github.com/jonhoffmam">
					Jon Hoffmam
				</a>
			</Text>
		</FooterBase>
	);
}

export default Footer;
