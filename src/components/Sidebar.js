import React from 'react';
import Project from './Project';
import useFetch from '../../src/hooks/useFetch';
import '../styles/scss/App.scss';
// import '../styles/scss/components/Sidebar.scss';

const Sidebar = ({ peticion, style }) => {
	const [projects, error] = useFetch(peticion);

	if (error) {
		return <span>Hubo un error</span>;
	}

	return (
		<div style={style} className='container-sidebar'>
			{projects ? (
				<nav className={`sidebar-navigation`}>
					<ul className='navigation pr-2'>
						{projects.map(({ id, projectName, dev, languages, company }) => (
							<li key={id}>
								<Project
									projectName={projectName}
									dev={dev}
									languages={languages}
									company={company}
								/>
							</li>
						))}
					</ul>
				</nav>
			) : (
				<span>Cargando...</span>
			)}
		</div>
	);
};

export default Sidebar;
