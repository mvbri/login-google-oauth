import React from 'react';
import Project from '../Project';
import useFecth from '../../hooks/useFecth';
import '../../styles/scss/App.scss';

const Projects = ({ peticion }) => {
	const [projects, error] = useFecth(peticion);

	if (error) {
		return <span>Hubo un error</span>;
	}

	return (
		<div>
			{projects ? (
				<section>
					<ul>
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
				</section>
			) : (
				<span>Cargando...</span>
			)}
		</div>
	);
};

export default Projects;
