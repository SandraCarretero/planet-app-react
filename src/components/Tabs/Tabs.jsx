import { v4 } from 'uuid';
import { TABS } from '../../constants/tabs';
import { StyledTabsContainer, StyledTab } from './tabs.styles';

const Tabs = ({ markedTab, setMarkedTab, planetColor }) => {
	return (
		<StyledTabsContainer>
			{TABS.map((tab, i) => (
				<StyledTab
					$marked={markedTab === i}
					$color={planetColor}
					key={v4()}
					onClick={() => setMarkedTab(i)}
				>
					{tab.toUpperCase()}
				</StyledTab>
			))}
		</StyledTabsContainer>
	);
};

export default Tabs;
