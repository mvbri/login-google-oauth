import React from 'react';

const loginAccess = [
	{
		id: 1,
		access: 'Administradores',
		image:
			'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		operation: '',
	},
	{
		id: 2,
		access: 'Developers',
		image:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		operation: '',
	},
	{
		id: 3,
		access: 'Project Managers',
		image:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		operation: '',
	},
];

function Login() {
	return (
		<div className='min-h-screen place-items-center grid items-start md:place-items-center bg-slate-100'>
			<h2 className='self-center pt-4 text-blue-700 font-semibold text-lg md:text-xl'>
				Login
			</h2>
			<ul className='self-start grid grid-cols-2  md:grid-cols-none md:grid-flow-col place-items-center gap-4'>
				{loginAccess.map((loginAccess) => (
					<li key={loginAccess.id} className='py-4'>
						<a href={loginAccess.operation}>
							<img
								className='w-32 h-32 md:h-32 md:w-32 squater-full m-auto mb-4 hover:brightness-90 transition ease-in-out delay-100'
								src={loginAccess.image}
								alt=''
							/>
						</a>
						<div>
							<p className='font-semibold text-sm text-gray-900 text-center text-stone-700'>
								{loginAccess.access}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Login;
