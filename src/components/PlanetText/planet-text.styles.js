import styled from 'styled-components';

const StyledPlanetContainer = styled.article`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-inline: 24px;

	@media (min-width: 768px) {
		padding-inline: 40px;
		position: relative;
	}

	@media (min-width: 1280px) {
		flex-direction: row;
		padding-inline: 165px;
		justify-content: space-between;
		height: 100%;
	}
`;

const StyledPlanetImg = styled.div`
	width: ${({ $size }) => $size.mobile + 'px'};
	margin-block: 95px;
	position: relative;

	@media (min-width: 768px) {
		width: ${({ $size }) => $size.tablet + 'px'};
	}
`;

const StyledSurfaceImg = styled.img`
	scale: 0.5;
	position: absolute;
	left: 50%;
	translate: -50%;
	bottom: -90px;
`;

const StyledPlanetTextContainer = styled.div`
	@media (min-width: 768px) {
		width: 50%;
		text-align: start;
		transform: translateX(-50%);
	}

	@media (min-width: 1280px) {
		justify-items: start;
		height: 100%;
		width: 350px;
		transform: translateX(0%);
		text-align: start;
	}
`;

const StyledPlanetTitle = styled.h2`
	font-size: 40px;
	font-weight: 400;
	margin: 0;
	letter-spacing: 1px;

	@media (min-width: 1280px) {
		font-size: 80px;
	}

	@media (min-width: 1280px) {
		margin-top: 45px;
	}
`;

const StyledPlanetText = styled.p`
	display: flex;
	justify-content: center;
	gap: 3px;
	font-family: 'Spartan', sans-serif;
	font-size: 12px;
	font-weight: 300;
	letter-spacing: 1px;
	line-height: 22px;
	margin-top: 16px;
	margin-bottom: 32px;
	color: lightgray;

	@media (min-width: 768px) {
		height: 150px;
		margin-bottom: 0;
	}

	@media (min-width: 1280px) {
		height: 120px;
	}
`;

const StyledPlanetSource = styled(StyledPlanetText)`
	height: 25px;

	@media (min-width: 768px) {
		justify-content: start;
		margin-bottom: 32px;
	}
`;

export {
	StyledPlanetContainer,
	StyledPlanetImg,
	StyledSurfaceImg,
	StyledPlanetTextContainer,
	StyledPlanetTitle,
	StyledPlanetText,
	StyledPlanetSource
};
