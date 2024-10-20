import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) and (max-width: 1023px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		max-width: 100vw;
		align-items: center;
		justify-items: center;
		padding-top: 1.25rem;
	}
`;

const StyledTextContainer = styled.article`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-inline: 1.5rem;

	@media (min-width: 768px) and (max-width: 1023px) {
		width: 50%;
		order: 1;
		text-align: left;
		align-items: flex-start;
	}

	@media (min-width: 1024px) {
		width: 21.875rem;
		align-items: flex-start;
		text-align: left;
		padding: 0;
		align-self: end;
	}
`;

const StyledPlanetTitle = styled.h2`
	font-size: 2.5rem;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0.0625rem;

	@media (min-width: 1024px) {
		font-size: 5rem;
	}
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

	@media (min-width: 1024px) {
		font-size: 0.875rem;
	}
`;

const StyledPlanetInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-inline: 1.5rem;
	margin-top: 1.75rem;
	margin-bottom: 2.9375rem;
	width: 100%;

	@media (min-width: 768px) and (max-width: 1023px) {
		width: 100%;
		order: 3;
		flex-direction: row;
		justify-content: space-between;
	}

	@media (min-width: 1024px) {
		grid-column: 1 / 3;
		order: 3;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0.0625rem solid gray;
	padding-inline: 1.5rem;

	@media (min-width: 768px) and (max-width: 1023px) {
		flex-direction: column;
		width: 22%;
		height: 5.5rem;
		align-items: flex-start;
		justify-content: space-evenly;
	}

	@media (min-width: 1024px) {
		flex-direction: column;
		width: 22%;
		height: 8rem;
		align-items: flex-start;
		justify-content: space-evenly;
	}
`;

const StyledInfoTitle = styled.p`
	color: gray;
	letter-spacing: 0.0625rem;
	font-size: 0.625rem;
	font-family: 'Spartan', sans-serif;

	@media (min-width: 768px) {
		margin: 0;
	}
	@media (min-width: 1024px) {
		font-size: 0.6875rem;
	}
`;

const StyledInfoData = styled.p`
	color: white;
	font-size: 1.25rem;

	@media (min-width: 768px) {
		font-size: 1.5rem;
		margin: 0;
	}

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`;

export {
	StyledContainer,
	StyledTextContainer,
	StyledPlanetTitle,
	StyledPlanetText,
	StyledPlanetInfoContainer,
	StyledInfo,
	StyledInfoTitle,
	StyledInfoData
};
