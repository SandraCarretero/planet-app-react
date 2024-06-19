import styled from 'styled-components';

const StyledTabsContainer = styled.div`
	height: 3.125rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.5rem;
	border-bottom: 0.0625rem solid #979797;

	@media (min-width: 768px) {
		width: 50%;
		height: 9.5rem;
		order: 2;
		flex-direction: column;
		border-bottom: 0;
	}

	@media (min-width: 1024px) {
		height: 11rem;
		align-self: start;
	}
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

	@media (min-width: 768px) {
		width: 17.5625rem;
		height: 2.5rem;
		text-align: left;
		background-color: ${({ $marked, $color }) =>
			$marked ? `${$color}` : 'transparent'};
		border: ${({ $marked }) =>
			$marked ? `transparent` : '1px solid #ffffff60'};
		color: white;
	}

	@media (min-width: 1024px) {
		width: 21.875rem;
		height: 3rem;
	}
`;

export { StyledTabsContainer, StyledTab };
