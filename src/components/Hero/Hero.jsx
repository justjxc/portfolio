import Layout from '../Layout/Layout';
import SkillsList from '../SkillsList/SkillsList';
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t } = useTranslation();

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
			</Layout>
		</section>
	);
};

export default Hero;
