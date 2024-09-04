import TabsItem from '../TabsItem/TabsItem';
import reactImage1 from '../../../assets/img/project-react-1.jpg';
import reactImage2 from '../../../assets/img/project-react-2.jpg';
import reactImage3 from '../../../assets/img/project-react-3.jpg';

const TabsReact = () => {
	const PROJECTS = [
		{
			id: 0,
			src: reactImage1,
			href: 'https://justjxc.github.io/react-weather/',
			caption: 'A weather app',
		},

		{
			id: 1,
			src: reactImage2,
			href: 'https://justjxc.github.io/react-notes/',
			caption: 'Note taking app',
		},

		{
			id: 2,
			src: reactImage3,
			href: 'https://justjxc.github.io/react-tasks/',
			caption: 'Task manager app',
		},
	];

	return (
		<ul className='grid grid-cols-3 w-full h-full gap-12'>
			{PROJECTS.map(project => {
				return <TabsItem key={project.id} src={project.src} href={project.href} caption={project.caption} />;
			})}
		</ul>
	);
};

export default TabsReact;
