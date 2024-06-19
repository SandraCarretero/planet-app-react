import styled from 'styled-components';

const StyledPlanetContainer = styled.article`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-inline: 1.5rem;

	@media (min-width: 768px) and (max-width: 1023px) {
		width: 100%;
		order: 0;
	}

	@media (min-width: 1024px) {
		order: 0;
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
`;

const StyledPlanetImg = styled.div`
	width: ${({ $size }) => $size.mobile + 'px'};
	margin-block: 5.9375rem;
	position: relative;

	@media (min-width: 768px) and (max-width: 1023px) {
		width: ${({ $size }) => $size.tablet + 'px'};
	}

	@media (min-width: 1024px) {
		width: ${({ $size }) => $size.computer + 'px'};
	}
`;

const StyledSurfaceImg = styled.img`
	transform: scale(0.5);
	position: absolute;
	bottom: -5.625rem;
`;

export { StyledPlanetContainer, StyledPlanetImg, StyledSurfaceImg };
