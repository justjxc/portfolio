import { useState, useEffect } from 'react';

import cn from 'classnames';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const smoothScroll = e => {
		e.preventDefault();

		const target = e.target.getAttribute('href');

		if (target)
			document.getElementById(target.slice(1)).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 100);
		});
	}, []);

	return (
		<header
			className={cn('top-0 left-0 w-full flex justify-center items-center p-6 border-b-neutral-300 border-b z-50', {
				absolute: !isScrolled,
				'fixed bg-indigo-950 p-4': isScrolled,
			})}
		>
			<nav className='text-4xl text-neutral-200 max-w-[500px]'>
				<ul onClick={smoothScroll} className='list-none h-full flex justify-between items-center gap-32'>
					<li className='hover:text-amber-600 transition-colors duration-300'>
						<a href='#home'>Home</a>
					</li>

					<li className='hover:text-amber-600 transition-colors duration-300'>
						<a href='#projects'>Projects</a>
					</li>

					<li className='hover:text-amber-600 transition-colors duration-300'>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
