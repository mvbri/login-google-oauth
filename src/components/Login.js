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
			<div>
				<h2 className='self-center text-center pt-4 text-blue-700 font-semibold text-lg md:text-5xl mb-6'>
					Login
				</h2>
				<ul className='self-start grid grid-cols-2  md:grid-cols-none md:grid-flow-col place-items-center gap-8'>
					{loginAccess.map((loginAccess) => (
						<li key={loginAccess.id} className='py-4'>
							<a className='link-access' href={loginAccess.operation}>
								<img
									className='w-32 h-32 md:h-40 md:w-40 squater-full rounded hover:border-2 border-solid  border-blue-700 m-auto mb-4 hover:brightness-90 transition ease-in-out delay-100'
									src={loginAccess.image}
									alt=''
								/>
								<p className='font-semibold text-sm text-gray-900 text-center text-stone-700 transition ease-in'>
									{loginAccess.access}
								</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Login;
