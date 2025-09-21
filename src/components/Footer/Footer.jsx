import { useTranslation } from 'react-i18next';
import Contacts from '../Contacts/Contacts';
import Layout from '../Layout/Layout';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer id='contact' className='w-screen py-64 bg-zinc-950 text-white'>
			<Layout>
				<div className='flex flex-col justify-between items-center gap-12'>
					<h2 className='font-semibold text-center text-4xl tracking-wider sm:text-5xl'>{t('contactMe')}</h2>

					<p className='text-4xl text-amber-600'>bedarev.official@gmail.com</p>

					<div className='w-full h-[1px] bg-neutral-500 sm:w-2/3 lg:w-1/3'></div>

					<Contacts />
				</div>
			</Layout>
		</footer>
	);
};

export default Footer;
