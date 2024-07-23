import TabsLayouts from './TabsLayouts/TabsLayouts';
import TabsReact from './TabsReact/TabsReact';

const TabsContent = ({ selectedTab }) => {
	return (
		<div className='mt-32 w-full h-full'>
			{selectedTab === 0 && <TabsLayouts />}
			{selectedTab === 1 && <TabsReact />}
		</div>
	);
};

export default TabsContent;
