import styled from 'styled-components';

const StyledTabsContainer = styled.div`
	height: 3.125rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.5rem;
	border-bottom: 0.0625rem solid #979797;
`;

const StyledTab = styled.button`
	height: 100%;
	border: none;
	border-bottom: ${({ $marked, $color }) =>
		$marked ? `4px solid ${$color}` : 'none'};
	background-color: transparent;
	color: ${({ $marked }) => ($marked ? 'white' : '#979797')};
	font-family: 'League Spartan', sans-serif;
	font-size: 0.75rem;
	font-weight: bold;
	letter-spacing: 0.0625rem;
	cursor: pointer;
`;

export { StyledTabsContainer, StyledTab };
