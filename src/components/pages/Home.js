import React from 'react';
import '../../../src/App.css';
import '../../styles/Home.css';
import Sidebar from '../Sidebar';
import { useState } from 'react';

const Home = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const showMenu = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<div>
			<nav className='main-menu'>
				<ul>
					<li>
						<a href='#' className='ml-1 link'>
							Ajustes
						</a>
						<button
							onClick={() => showMenu()}
							id='menu-btn'
							className='ml-1 link'
						>
							Menu
						</button>
					</li>
				</ul>
			</nav>
			<Sidebar
				style={{ width: showSidebar ? '0' : '300px' }}
				peticion='projects'
			/>
		</div>
	);
};

export default Home;
