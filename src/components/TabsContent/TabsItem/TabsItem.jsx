const TabsItem = ({ src, href }) => {
	return (
		<li className='shadow-lg transition-transform duration-300 hover:scale-105'>
			<a href={href} rel='noreferrer' target='_blank' className='rounded-3xl overflow-hidden shadow-lg'>
				<img src={src} alt='project preview' className='' />
			</a>
		</li>
	);
};

export default TabsItem;
