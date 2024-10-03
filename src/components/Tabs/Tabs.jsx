import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const Tabs = ({ selectedTab, handleClick }) => {
	const { t } = useTranslation();

	return (
		<div className='flex justify-between items-center h-[70px] text-4xl overflow-hidden relative'>
			<div
				className={cn('flex-1 flex justify-center items-center cursor-pointer h-full z-10 transition-all capitalize peer/layout', {
					'text-neutral-200': selectedTab === 0,
					'': selectedTab === 1,
				})}
				onClick={() => handleClick(0)}
			>
				{t('layout')}
			</div>

			<div
				className={cn('flex-1 flex justify-center items-center cursor-pointer h-full z-10 transition-all capitalize peer/react', {
					'text-neutral-200': selectedTab === 1,
					' ': selectedTab === 0,
				})}
				onClick={() => handleClick(1)}
			>
				{t('react')}
			</div>

			<div
				className={cn('absolute w-1/2 h-full bg-indigo-950 transition-all duration-300', {
					'left-0 peer-hover/react:left-[calc(0px+30px)]': selectedTab === 0,
					'left-1/2 peer-hover/layout:left-[calc(50%-30px)]': selectedTab === 1,
				})}
			></div>
		</div>
	);
};

export default Tabs;
