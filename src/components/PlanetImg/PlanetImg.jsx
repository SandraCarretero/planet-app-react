import {
	StyledPlanetContainer,
	StyledPlanetImg,
	StyledSurfaceImg
} from './planet-img.styles';

const PlanetImg = ({ markedTab, planetData, planetSize }) => {
	return (
		<StyledPlanetContainer>
			<StyledPlanetImg $size={planetSize}>
				<img src={planetData.img[markedTab]} alt='' />
				{markedTab === 2 && <StyledSurfaceImg src={planetData.img[3]} />}
			</StyledPlanetImg>
		</StyledPlanetContainer>
	);
};

export default PlanetImg;
