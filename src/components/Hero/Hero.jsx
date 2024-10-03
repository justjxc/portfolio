import { HiOutlineChevronDown } from 'react-icons/hi2';
import Layout from '../Layout/Layout';
import SkillsList from '../SkillsList/SkillsList';
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t } = useTranslation();

	const handleClick = e => {
		e.preventDefault();

		const targetID = e.target.getAttribute('href').slice(1);

		document.getElementById(targetID).scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<section id='home' className='w-screen h-screen bg-gradient-to-tl from-black to-indigo-950 text-neutral-200'>
			<Layout>
				<div className='w-full h-full flex flex-col  items-center overflow-hidden  z-10'>
					<div className='flex flex-col gap-16 justify-center items-center mt-[350px]'>
						<h1 className='bold text-8xl'>{t('name')}</h1>
						<p className='text-5xl text-neutral-300 font-thin'>{t('info')}</p>
					</div>

					<SkillsList />
				</div>

				<div className='absolute w-full left-0 bottom-10 flex flex-col justify-center items-center'>
					<a
						href='#projects'
						onClick={handleClick}
						className='text-neutral-400 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-4 hover:text-white'
					>
						<HiOutlineChevronDown size={36} className='text-current pointer-events-none' />
					</a>
				</div>
			</Layout>
		</section>
	);
};

export default Hero;
