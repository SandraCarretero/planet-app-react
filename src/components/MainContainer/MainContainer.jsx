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
			<Header showMenu={showMenu} setShowMenu={setShowMenu} />
			<PlanetText
				markedTab={markedTab}
				setMarkedTab={setMarkedTab}
				planetData={planetData}
				planetSize={size}
				planetColor={color}
			/>
			<PlanetInfo planetData={planetData} />
		</StyledMainContainer>
	);
};

export default MainContainer;
