const TabsItem = ({ src, href }) => {
	return (
		<li className='shadow-lg'>
			<a href={href} target='_blank' className='rounded-3xl overflow-hidden shadow-lg'>
				<img src={src} alt='project preview' className='' />
			</a>
		</li>
	);
};

export default TabsItem;
