import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// import ButtonLink from '../ButtonLink';
import Button from '../Button';

import logo from '../../assets/logo.svg';
import './styles.css';

const Menu = () => {
	const history = useHistory();

	return (
		<header className="Menu">
			<Link to="/">
				<img className="logo" src={logo} alt="Trailerflix"/>
			</Link>

			{/* <ButtonLink className="ButtonLink" to="/">
				Novo Video
			</ButtonLink> */}

			<Button as="a" className="ButtonLink" onClick={() => history.push('/')}>
				Novo Video
			</Button>

		</header>
	);
}

export default Menu;