import {
	StyledPlanetContainer,
	StyledPlanetImg,
	StyledPlanetText,
	StyledPlanetTitle,
	StyledSurfaceImg
} from './planet-text.styles';

const PlanetText = ({ markedTab, planetData, planetSize }) => {
	return (
		<StyledPlanetContainer>
			<StyledPlanetImg $size={planetSize}>
				<img src={planetData.img[markedTab]} alt='' />
				{markedTab === 2 && <StyledSurfaceImg src={planetData.img[3]} />}
			</StyledPlanetImg>
			<div>
				<StyledPlanetTitle>{planetData.name.toUpperCase()}</StyledPlanetTitle>
				<StyledPlanetText>{planetData.text[markedTab]}</StyledPlanetText>
				<StyledPlanetText>
					Source: <a href={planetData.link}>Wikipedia</a>
					<img src='/images/link-icon.svg' alt='' />
				</StyledPlanetText>
			</div>
		</StyledPlanetContainer>
	);
};

export default PlanetText;
