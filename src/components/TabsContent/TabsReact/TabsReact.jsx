import TabsItem from '../TabsItem/TabsItem';
import reactImage1 from '../../../assets/img/project-react-1.jpg';
import reactImage2 from '../../../assets/img/project-react-2.jpg';
import reactImage3 from '../../../assets/img/project-react-3.jpg';
import { useTranslation } from 'react-i18next';

const TabsReact = () => {
	const { t } = useTranslation();

	const PROJECTS = [
		{
			id: 0,
			src: reactImage1,
			href: 'https://justjxc.github.io/react-weather/',
			caption: t('weatherAppName'),
		},

		{
			id: 1,
			src: reactImage2,
			href: 'https://justjxc.github.io/react-notes/',
			caption: t('noteTakingAppName'),
		},

		{
			id: 2,
			src: reactImage3,
			href: 'https://justjxc.github.io/react-tasks/',
			caption: t('taskManagerAppName'),
		},
	];

	return (
		<ul className='grid grid-cols-1 w-full h-full gap-12 sm:grid-cols-2 md:grid-cols-3'>
			{PROJECTS.map(project => {
				return <TabsItem key={project.id} src={project.src} href={project.href} caption={project.caption} />;
			})}
		</ul>
	);
};

export default TabsReact;
