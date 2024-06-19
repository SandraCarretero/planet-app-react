import { StyledPlanetImg, StyledSurfaceImg } from './planet-text.styles';

const PlanetText = ({ markedTab, planetData, planetSize }) => {
	return (
		<StyledPlanetImg $size={planetSize}>
			<img src={planetData.img[markedTab]} alt='' />
			{markedTab === 2 && <StyledSurfaceImg src={planetData.img[3]} />}
		</StyledPlanetImg>
	);
};

export default PlanetText;
