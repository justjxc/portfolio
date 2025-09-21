import cn from 'classnames';
import { useState } from 'react';

const HamburgerBtn = ({ openMenu }) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		openMenu();
		setIsActive(prev => !prev);
	};

	return (
		<button onClick={handleClick} className='w-14 h-10 flex flex-col justify-between items-center absolute left-10 block sm:hidden'>
			<div className={cn('bg-neutral-200 h-[2px] transition-all duration-300 absolute top-0', { 'w-0 top-1/2': isActive }, { 'w-full': !isActive })}></div>
			<div className={cn('bg-neutral-200 w-full h-[2px] transition-all duration-300 absolute top-[calc(50%-1px)]', { 'rotate-45': isActive })}></div>
			<div className={cn('bg-neutral-200 w-full h-[2px] transition-all duration-300 absolute top-[calc(50%-1px)]', { '-rotate-45': isActive })}></div>
			<div
				className={cn('bg-neutral-200 h-[2px] transition-all duration-300 absolute bottom-0', { 'w-0 bottom-1/2': isActive }, { 'w-full': !isActive })}
			></div>
		</button>
	);
};

export default HamburgerBtn;
