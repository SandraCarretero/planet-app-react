import styled from 'styled-components';

const StyledPlanetInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-inline: 24px;
	margin-top: 28px;
	margin-bottom: 47px;
`;

const StyledInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid gray;
	padding-inline: 24px;
`;

const StyledInfoTitle = styled.p`
	color: gray;
	letter-spacing: 1px;
	font-size: 10px;
	font-family: 'Spartan', sans-serif;
`;

const StyledInfoData = styled.p`
	color: white;
	font-family: 20px;
`;

export {
	StyledPlanetInfoContainer,
	StyledInfo,
	StyledInfoTitle,
	StyledInfoData
};
