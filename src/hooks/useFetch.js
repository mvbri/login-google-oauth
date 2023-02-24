import { useState, useEffect } from 'react';
import axios from 'axios';

const useFecth = (endpoint) => {
	const [data, setData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_URL_API}${endpoint}`)
			.then(({ data }) => setData(data))
			.catch((err) => setError(err));
	}, []);
	return [data, error];
};

export default useFecth;
