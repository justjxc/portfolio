import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';

const links = [
	{
		id: 0,
		color: '#0077FF',
		icon: faVk,
		href: 'https://vk.com/id68434251',
	},

	{
		id: 1,
		color: '#24A1DE',
		icon: faTelegram,
		href: 'https://t.me/JuSt1Q',
	},
];

const Contacts = () => {
	return (
		<ul className='flex gap-16'>
			{links.map(link => {
				return (
					<li key={link.id} className='pointer'>
						<a href={link.href} rel='noreferrer' target='_blank' className={`transition-colors hover:text-[${link.color}] duration-300`}>
							<FontAwesomeIcon icon={link.icon} size='2x' className='text-current' />
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Contacts;
