import layoutImage1 from '../../../assets/img/project-layout-1.jpg';
import layoutImage2 from '../../../assets/img/project-layout-2.jpg';
import layoutImage3 from '../../../assets/img/project-layout-3.jpg';
import layoutImage4 from '../../../assets/img/project-layout-4.jpg';
import layoutImage5 from '../../../assets/img/project-layout-5.jpg';
import TabsItem from '../TabsItem/TabsItem';

const TabsLayouts = () => {
	return (
		<ul className='grid grid-cols-3 w-full h-full gap-12'>
			<TabsItem src={layoutImage1} href='https://justjxc.github.io/layout-thrive/' />
			<TabsItem src={layoutImage2} href='https://justjxc.github.io/layout-taster/' />
			<TabsItem src={layoutImage3} href='https://justjxc.github.io/lauout-building/' />
			<TabsItem src={layoutImage4} href='https://justjxc.github.io/layout-koin/' />
			<TabsItem src={layoutImage5} href='https://justjxc.github.io/layout-tasteEat/' />
		</ul>
	);
};

export default TabsLayouts;
