import cn from 'classnames';

const Tabs = ({ selectedTab, handleClick }) => {
	return (
		<div className='flex justify-between items-center h-[70px] border-2 border-indigo-950 text-4xl'>
			<div
				className={cn('flex-1 flex justify-center items-center cursor-pointer h-full transition-all', {
					'bg-indigo-950 text-neutral-200': selectedTab === 0,
				})}
				onClick={() => handleClick(0)}
			>
				Вёрстка
			</div>

			<div
				className={cn('flex-1 flex justify-center items-center cursor-pointer h-full transition-all', {
					'bg-indigo-950 text-neutral-200': selectedTab === 1,
				})}
				onClick={() => handleClick(1)}
			>
				React js
			</div>
		</div>
	);
};

export default Tabs;
