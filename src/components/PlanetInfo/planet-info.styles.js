import styled from 'styled-components';

const StyledPlanetInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-inline: 24px;
	margin-top: 28px;
	margin-bottom: 47px;

	@media (min-width: 768px) {
		flex-direction: row;
	}

	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
`;

const StyledInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid gray;
	padding-inline: 24px;

	@media (min-width: 768px) {
		flex-direction: column;
		width: 100%;
		align-items: start;
		gap: 5px;
		padding: 16px;
	}
`;

const StyledInfoTitle = styled.p`
	color: gray;
	letter-spacing: 1px;
	font-size: 10px;
	font-family: 'Spartan', sans-serif;

	@media (min-width: 768px) {
		margin: 0;
	}
`;

const StyledInfoData = styled.p`
	color: white;
	font-family: 20px;

	@media (min-width: 768px) {
		margin: 0;
		font-size: 24px;
	}
`;

export {
	StyledPlanetInfoContainer,
	StyledInfo,
	StyledInfoTitle,
	StyledInfoData
};
