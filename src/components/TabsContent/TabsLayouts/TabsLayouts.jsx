import layoutImage1 from '../../../assets/img/project-layout-1.jpg';
import layoutImage2 from '../../../assets/img/project-layout-2.jpg';
import layoutImage3 from '../../../assets/img/project-layout-3.jpg';
import layoutImage4 from '../../../assets/img/project-layout-4.jpg';
import layoutImage5 from '../../../assets/img/project-layout-5.jpg';
import TabsItem from '../TabsItem/TabsItem';

const TabsLayouts = () => {
	const PROJECTS = [
		{
			id: 0,
			src: layoutImage1,
		},

		{
			id: 1,
			src: layoutImage2,
			href: 'https://justjxc.github.io/layout-taster/',
		},

		{
			id: 2,
			src: layoutImage3,
			href: 'https://justjxc.github.io/lauout-building/',
		},

		{
			id: 3,
			src: layoutImage4,
			href: 'https://justjxc.github.io/layout-koin/',
		},

		{
			id: 4,
			src: layoutImage5,
			href: 'https://justjxc.github.io/layout-tasteEat/',
		},
	];

	return (
		<ul className='grid grid-cols-3 w-full h-full gap-12'>
			{PROJECTS.map(project => {
				return <TabsItem key={project.id} src={project.src} href={project.href} />;
			})}
		</ul>
	);
};

export default TabsLayouts;
