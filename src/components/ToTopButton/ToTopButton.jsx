import { useEffect, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';

import cn from 'classnames';

const ToTopButton = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const smoothScroll = () => {
		document.getElementById('home').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 500);
		});
	});

	return (
		<button
			onClick={smoothScroll}
			className={cn(
				'fixed right-10 bottom-10 rounded-full bg-neutral-100 shadow-circle w-16 h-16 flex justify-center items-center transition-all duration-200 group hover:bg-indigo-950 hover:animate-bounceUp',
				{
					hidden: !isScrolled,
				}
			)}
		>
			<IoChevronUp size={26} className='text-indigo-950 transition-colors duration-200 group-hover:text-neutral-100 group-hover:' />
		</button>
	);
};

export default ToTopButton;
