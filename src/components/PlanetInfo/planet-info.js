import styled from 'styled-components';

const StyledPlanetInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-inline: 1.5rem;
	margin-top: 1.75rem;
	margin-bottom: 2.9375rem;
`;

const StyledInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0.0625rem solid gray;
	padding-inline: 1.5rem;
`;

const StyledInfoTitle = styled.p`
	color: gray;
	letter-spacing: 0.0625rem;
	font-size: 0.625rem;
	font-family: 'Spartan', sans-serif;
`;

const StyledInfoData = styled.p`
	color: white;
	font-family: 1.25rem;
`;

export {
	StyledPlanetInfoContainer,
	StyledInfo,
	StyledInfoTitle,
	StyledInfoData
};
