import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function LoginOAuthGoogle() {
	const navigate = useNavigate();

	function handleGoogleAuth(response) {
		navigate('/home');
	}

	const errorMessage = (error) => {
		console.log(error);
	};
	return (
		<div className='login-conatainer'>
			<h2>React Google Login</h2>
			<br />
			<br />
			<GoogleLogin onSuccess={handleGoogleAuth} onError={errorMessage} />
		</div>
	);
}

export default LoginOAuthGoogle;
