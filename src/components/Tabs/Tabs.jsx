import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const Tabs = ({ selectedTab, handleClick }) => {
	const { t } = useTranslation();

	return (
		<div className='flex justify-between items-center h-[70px] border-2 border-indigo-950 text-4xl'>
			<div
				className={cn('flex-1 flex justify-center items-center cursor-pointer h-full transition-all capitalize', {
					'bg-indigo-950 text-neutral-200': selectedTab === 0,
				})}
				onClick={() => handleClick(0)}
			>
				{t('layout')}
			</div>

			<div
				className={cn('flex-1 flex justify-center items-center cursor-pointer h-full transition-all capitalize', {
					'bg-indigo-950 text-neutral-200': selectedTab === 1,
				})}
				onClick={() => handleClick(1)}
			>
				{t('react')}
			</div>
		</div>
	);
};

export default Tabs;
