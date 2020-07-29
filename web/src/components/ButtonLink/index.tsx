import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.svg';
// import './styles.css';

const ButtonLink = (props: any) => {
	return (
		<Link className={props.className} to={props.to}>
			{props.children}
		</Link>

	);
}

export default ButtonLink;