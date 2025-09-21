import { FaSass } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';

const SkillsList = () => {
	const liClassName = 'w-28 h-28';
	const iconClassName = 'w-full h-full';

	return (
		<ul className='grid grid-cols-3 sm:flex sm:justify-between sm:items-center gap-12 mt-40 sm:mt-60 '>
			<li className={liClassName}>
				<SiHtml5 color='#e34c26' className={iconClassName} />
			</li>

			<li className={liClassName}>
				<SiCss3 color='#264de4' className={iconClassName} />
			</li>

			<li className={liClassName}>
				<SiJavascript color='#F0DB4F' className={iconClassName} />
			</li>

			<li className={liClassName}>
				<FaSass color='#cc6699' className={iconClassName} />
			</li>

			<li className={liClassName}>
				<SiReact color='#61DBFB' className={iconClassName} />
			</li>

			<li className={liClassName}>
				<SiTailwindcss color='#06B6D4' className={iconClassName} />
			</li>
		</ul>
	);
};

export default SkillsList;
