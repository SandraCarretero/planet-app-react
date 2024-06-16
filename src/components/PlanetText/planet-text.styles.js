import styled from 'styled-components';

const StyledPlanetContainer = styled.article`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-inline: 1.5rem;
`;

const StyledPlanetImg = styled.div`
	width: ${({ $size }) => $size.mobile + 'px'};
	margin-block: 5.9375rem;
	position: relative;
`;

const StyledSurfaceImg = styled.img`
	transform: scale(0.5);
	position: absolute;
	bottom: -5.625rem;
`;

const StyledPlanetTitle = styled.h2`
	font-size: 2.5rem;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0.0625rem;
`;

const StyledPlanetText = styled.p`
	display: flex;
	justify-content: center;
	gap: 0.1875rem;
	font-family: 'Spartan', sans-serif;
	font-size: 0.75rem;
	font-weight: 300;
	letter-spacing: 0.0625rem;
	line-height: 1.375rem;
	margin-top: 1rem;
	margin-bottom: 2rem;
	color: lightgray;
`;

export {
	StyledPlanetContainer,
	StyledPlanetImg,
	StyledSurfaceImg,
	StyledPlanetTitle,
	StyledPlanetText
};
