import TabsItem from '../TabsItem/TabsItem';
import reactImage1 from '../../../assets/img/project-react-1.png';
import reactImage2 from '../../../assets/img/project-react-2.png';
import reactImage3 from '../../../assets/img/project-react-3.png';

const TabsReact = () => {
	return (
		<ul className='grid grid-cols-3 w-full h-full gap-12'>
			<TabsItem src={reactImage1} href='#' />
			<TabsItem src={reactImage2} href='#' />
			<TabsItem src={reactImage3} href='#' />
		</ul>
	);
};

export default TabsReact;
