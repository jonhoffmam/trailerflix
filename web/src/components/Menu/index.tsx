import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';

// import Button from '../Button';

import logo from '../../assets/logo.svg';
import './styles.css';

const Menu = () => {

	return (
		<header className="Menu">

			<Link to="/">
				<img className="logo" src={logo} alt="Trailerflix"/>
			</Link>

		<BsSearch className="ButtonLink"/>

			{/* <Button className="ButtonLink" to="/" >
				Novo Video
			</Button> */}

		</header>
	);
}

export default Menu;