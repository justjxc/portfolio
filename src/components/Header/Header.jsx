import { useState, useEffect } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import ChangeLangButtons from '../ChangeLangButtons/ChangeLangButtons';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const { t } = useTranslation();

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
			className={cn('top-0 left-0 w-full flex justify-center items-center p-6 border-b-neutral-500 border-b z-50', {
				absolute: !isScrolled,
				'fixed bg-indigo-950 p-4': isScrolled,
			})}
		>
			<nav className='text-4xl text-neutral-200 max-w-[500px]'>
				<ul onClick={smoothScroll} className='list-none h-full flex justify-between items-center gap-32'>
					<li className='hover:text-amber-600 transition-colors duration-300 capitalize'>
						<a href='#home'>{t('home')}</a>
					</li>

					<li className='hover:text-amber-600 transition-colors duration-300 capitalize'>
						<a href='#projects'>{t('projects')}</a>
					</li>

					<li className='hover:text-amber-600 transition-colors duration-300 capitalize'>
						<a href='#contact'>{t('contact')}</a>
					</li>
				</ul>
			</nav>

			<ChangeLangButtons />
		</header>
	);
};

export default Header;
