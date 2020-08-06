import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MediaPage from './pages/MediaPage';


const Routes = () => {
	const Page404 = () => (<div>Página 404</div>) //Criar uma página bonita para o 404

	return (
		<BrowserRouter>
			<Switch>
				<Route component={Home} path="/" exact/>
				<Route component={MediaPage} path="/:mediaType/:mediaID" />				
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;