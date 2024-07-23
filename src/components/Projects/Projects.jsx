import { useState } from 'react';

import Layout from '../Layout/Layout';
import Tabs from '../Tabs/Tabs';
import TabsContent from '../TabsContent/TabsContent';

const Projects = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleClick = value => {
		setSelectedTab(value);
	};

	return (
		<section id='projects' className='w-screen  bg-slate-100 py-72'>
			<Layout>
				<div className='w-full h-full'>
					<div className='flex flex-col w-full'>
						<Tabs selectedTab={selectedTab} handleClick={handleClick} />

						<TabsContent selectedTab={selectedTab} />
					</div>
				</div>
			</Layout>
		</section>
	);
};

export default Projects;
