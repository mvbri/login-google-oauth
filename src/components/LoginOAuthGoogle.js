import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const clientId = 'TU_CLIENT_ID_DE_GOOGLE';

function LoginOAuthGoogle() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onSuccess = async (response) => {
		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ token: response.accessToken }),
			});
			if (!res.ok) {
				throw new Error('Error al iniciar sesión.');
			}
			const data = await res.json();
			setIsLoggedIn(true);
			localStorage.setItem('token', data.token);
		} catch (error) {
			console.error('Error al iniciar sesión:', error);
		}
	};

	const onFailure = (error) => {
		console.error('Error al iniciar sesión:', error);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem('token');
	};

	return isLoggedIn ? (
		<div>
			<h1>Bienvenido</h1>
			<p>Has iniciado sesión correctamente.</p>
			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	) : (
		<GoogleLogin
			clientId={clientId}
			buttonText='Iniciar sesión con Google'
			onSuccess={onSuccess}
			onFailure={onFailure}
			cookiePolicy={'single_host_origin'}
		/>
	);
}
export default LoginOAuthGoogle;
