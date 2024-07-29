import TabsItem from '../TabsItem/TabsItem';
import reactImage1 from '../../../assets/img/project-react-1.png';
import reactImage2 from '../../../assets/img/project-react-2.png';
import reactImage3 from '../../../assets/img/project-react-3.png';

const TabsReact = () => {
	return (
		<ul className='grid grid-cols-3 w-full h-full gap-12'>
			<TabsItem src={reactImage1} href='https://justjxc.github.io/react-weather/' />
			<TabsItem src={reactImage2} href='https://justjxc.github.io/react-notes/' />
			<TabsItem src={reactImage3} href='https://justjxc.github.io/react-tasks/' />
		</ul>
	);
};

export default TabsReact;
