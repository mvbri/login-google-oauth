import React from 'react';
import { useState } from 'react';
import '../styles/scss/App.scss';

const Proyect = ({ id, projectName, dev, languages, company }) => {
	const [start, setStart] = useState(false);

	const click = (e) => {
		const target = e.target;
		if (target.className.includes('hide')) {
			return (target.className = target.className.replace('hide', 'show'));
		}
		target.className = target.className.replace('show', 'hide');
	};

	const settingStart = () => {
		setStart(!start);
	};
	return (
		<div className='project-item mb-2' key={id}>
			<div className='mb-1' onClick={(e) => click(e)}>
				<h2 className='project-title hide text-center mb-1'>{projectName}</h2>
				<div className='details mb-1'>
					<p className='text-center'>{dev}</p>
					<p className='text-center'>{languages}</p>
					<p className='text-center'>{company}</p>
				</div>
				{start && (
					<button className='button-project' onClick={settingStart}>
						Iniciar
					</button>
				)}
				{!start && (
					<button className='button-project' onClick={settingStart}>
						Detener
					</button>
				)}
			</div>
		</div>
	);
};

export default Proyect;
