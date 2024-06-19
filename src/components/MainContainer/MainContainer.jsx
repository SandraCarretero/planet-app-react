import { useState } from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import { StyledMainContainer } from './main-container.sytles';

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
			<Container
				markedTab={markedTab}
				setMarkedTab={setMarkedTab}
				planetData={planetData}
				planetSize={size}
				planetColor={color}
			/>
		</StyledMainContainer>
	);
};

export default MainContainer;
