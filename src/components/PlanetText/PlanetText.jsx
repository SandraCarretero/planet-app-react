import Tabs from '../Tabs/Tabs';
import {
	StyledPlanetContainer,
	StyledPlanetImg,
	StyledPlanetSource,
	StyledPlanetText,
	StyledPlanetTextContainer,
	StyledPlanetTitle,
	StyledSurfaceImg
} from './planet-text.styles';

const PlanetText = ({
	markedTab,
	setMarkedTab,
	planetData,
	planetSize,
	planetColor
}) => {
	return (
		<StyledPlanetContainer>
			<Tabs
				markedTab={markedTab}
				setMarkedTab={setMarkedTab}
				planetColor={planetColor}
			/>
			<StyledPlanetImg $size={planetSize}>
				<img src={planetData.img[markedTab]} alt='' />
				{markedTab === 2 && <StyledSurfaceImg src={planetData.img[3]} />}
			</StyledPlanetImg>
			<StyledPlanetTextContainer>
				<StyledPlanetTitle>{planetData.name.toUpperCase()}</StyledPlanetTitle>
				<StyledPlanetText>{planetData.text[markedTab]}</StyledPlanetText>
				<StyledPlanetSource>
					Source: <a href={planetData.link}>Wikipedia</a>
					<img src='/images/link-icon.svg' alt='' />
				</StyledPlanetSource>
			</StyledPlanetTextContainer>
		</StyledPlanetContainer>
	);
};

export default PlanetText;
