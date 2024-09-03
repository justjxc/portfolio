import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';

const links = [
	{
		id: 0,
		color: 'text-custom-color-vk',
		icon: faVk,
		href: 'https://vk.com/id68434251',
	},

	{
		id: 1,
		color: 'text-custom-color-tg',
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
						<a href={link.href} rel='noreferrer' target='_blank' className={`transition-colors duration-300 hover:${link.color} `}>
							<FontAwesomeIcon icon={link.icon} size='2x' className={`text-current`} />
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Contacts;
