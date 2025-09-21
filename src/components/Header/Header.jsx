import { useState, useEffect } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import ChangeLangButtons from '../ChangeLangButtons/ChangeLangButtons';
import HamburgerBtn from './HamburgerBtn/HamburgerBtn';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	const openMenu = () => {
		setIsMenuOpen(prev => !prev);
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 100);
		});
	}, []);

	return (
		<header
			className={cn('top-0 left-0 h-[56px] w-full flex justify-center items-center p-6 border-b-neutral-500 border-b z-50', {
				absolute: !isScrolled,
				'fixed bg-indigo-950 p-4': isScrolled,
			})}
		>
			<HamburgerBtn openMenu={openMenu} />

			<menu
				className={cn(
					'flex justify-center items-center flex-col absolute w-full top-[56px] bg-gradient-to-tl from-black to-indigo-950 sm:top-auto sm:w-auto sm:flex-row sm:block sm:bg-none',
					{ block: isMenuOpen },
					{ hidden: !isMenuOpen }
				)}
			>
				<nav className='text-4xl text-neutral-200 w-full sm:max-w-[500px]'>
					<ul onClick={smoothScroll} className='list-none w-full h-full flex justify-between items-center flex-col sm:gap-32 sm:flex-row'>
						<li className='hover:text-amber-600 transition-colors w-full duration-300 capitalize text-center p-10 border-b border-neutral-200 sm:p-0 sm:border-0'>
							<a href='#home'>{t('home')}</a>
						</li>

						<li className='hover:text-amber-600 transition-colors w-full duration-300 capitalize text-center p-10 border-b border-neutral-200 sm:p-0 sm:border-0'>
							<a href='#projects'>{t('projects')}</a>
						</li>

						<li className='hover:text-amber-600 transition-colors w-full duration-300 capitalize text-center p-10 border-b border-neutral-200 sm:p-0 sm:border-0'>
							<a href='#contact'>{t('contact')}</a>
						</li>
					</ul>
				</nav>
			</menu>

			<ChangeLangButtons />
		</header>
	);
};

export default Header;
