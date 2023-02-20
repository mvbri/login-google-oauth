import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginOAuthGoogle from './components/LoginOAuthGoogle';
import Home from './components/pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginOAuthGoogle />,
		errorElement: <h1>404</h1>,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

ReactDOM.render(
	<GoogleOAuthProvider clientId='252954509944-60g5rs81ho72bu8ub5pn62ccd4tddlqc.apps.googleusercontent.com'>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</GoogleOAuthProvider>,
	document.getElementById('root')
);
