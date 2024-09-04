const TabsItem = ({ src, href, caption }) => {
	return (
		<li className='group'>
			<a href={href} rel='noreferrer' target='_blank' className='rounded-3xl overflow-hidden shadow-lg'>
				<figure>
					<img src={src} alt='project preview' className='shadow-lg transition-transform duration-300 group-hover:scale-105' />

					{caption && <figcaption className='flex justify-center items-center mt-5 text-3xl text-neutral-700'>{caption}</figcaption>}
				</figure>
			</a>
		</li>
	);
};

export default TabsItem;
