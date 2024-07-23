import { useState, useEffect } from 'react';

import cn from 'classnames';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 100);
		});
	}, []);

	return (
		<header
			className={cn('top-0 left-0 w-full flex justify-center items-center p-6 border-b-neutral-300 border-b', {
				absolute: !isScrolled,
				'fixed bg-indigo-950 p-4': isScrolled,
			})}
		>
			<nav className='text-4xl text-neutral-200 max-w-[500px]'>
				<ul className='list-none h-full flex justify-between items-center gap-32'>
					<li className=''>
						<a href='#'>Home</a>
					</li>

					<li className=''>
						<a href='#'>Projects</a>
					</li>

					<li className=''>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
