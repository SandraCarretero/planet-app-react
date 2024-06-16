import { useState } from 'react';
import Header from '../Header/Header';
import { StyledMainContainer } from './main-container.sytles';
import PlanetText from '../PlanetText/PlanetText';
import PlanetInfo from '../PlanetInfo/PlanetInfo';

const MainContainer = ({ planetData }) => {
	const [markedTab, setMarkedTab] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const { size, color } = planetData;

	return (
		<StyledMainContainer>
			<Header
				markedTab={markedTab}
				setMarkedTab={setMarkedTab}
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				planetColor={color}
			/>
			<PlanetText
				markedTab={markedTab}
				planetData={planetData}
				planetSize={size}
			/>
			<PlanetInfo planetData={planetData} />
		</StyledMainContainer>
	);
};

export default MainContainer;
