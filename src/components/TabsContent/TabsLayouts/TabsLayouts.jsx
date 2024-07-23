import layoutImage1 from '../../../assets/img/project-layout-1.png';
import layoutImage2 from '../../../assets/img/project-layout-2.png';
import layoutImage3 from '../../../assets/img/project-layout-3.png';
import layoutImage4 from '../../../assets/img/project-layout-4.png';
import layoutImage5 from '../../../assets/img/project-layout-5.png';
import TabsItem from '../TabsItem/TabsItem';

const TabsLayouts = () => {
	return (
		<ul className='grid grid-cols-3 w-full h-full gap-12'>
			<TabsItem src={layoutImage1} href='#' />
			<TabsItem src={layoutImage2} href='#' />
			<TabsItem src={layoutImage3} href='#' />
			<TabsItem src={layoutImage4} href='#' />
			<TabsItem src={layoutImage5} href='#' />
		</ul>
	);
};

export default TabsLayouts;
