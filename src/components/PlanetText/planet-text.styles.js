import styled from 'styled-components';

const StyledPlanetContainer = styled.article`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-inline: 24px;
`;

const StyledPlanetImg = styled.div`
	width: ${({ $size }) => $size.mobile + 'px'};
	margin-block: 95px;
	position: relative;
`;

const StyledSurfaceImg = styled.img`
	transform: scale(0.5);
	position: absolute;
	bottom: -90px;
`;

const StyledPlanetTitle = styled.h2`
	font-size: 40px;
	font-weight: 400;
	margin: 0;
	letter-spacing: 1px;
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
`;

export {
	StyledPlanetContainer,
	StyledPlanetImg,
	StyledSurfaceImg,
	StyledPlanetTitle,
	StyledPlanetText
};
