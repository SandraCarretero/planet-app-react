import styled from 'styled-components';

const StyledTabsContainer = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 24px;
	border-bottom: 1px solid #979797;
`;

const StyledTab = styled.button`
	height: 100%;
	border: none;
	border-bottom: ${({ $marked, $color }) =>
		$marked ? `4px solid ${$color}` : 'none'};
	background-color: transparent;
	color: ${({ $marked }) => ($marked ? 'white' : '#979797')};
	font-family: 'League Spartan', sans-serif;
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 1px;
	cursor: pointer;
`;

export { StyledTabsContainer, StyledTab };
