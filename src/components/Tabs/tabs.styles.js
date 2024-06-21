import styled from 'styled-components';

const StyledTabsContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 24px;
	border-bottom: 1px solid #979797;
	position: absolute;

	@media (min-width: 768px) {
		height: 152px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		bottom: 72px;
		width: 280px;
		border: none;
		right: 0;
	}

	@media (min-width: 1280px) {
		right: 165px;
		bottom: 20px;
		padding-inline: 0;
		width: 350px;
		z-index: 99;
		width: 350px;
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
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 1px;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 100%;
		height: 40px;
		border: 1px solid white;
		text-align: start;
		padding-left: 16px;
		font-size: 9px;
		letter-spacing: 2px;
		line-height: 25px;
		background-color: ${({ $marked, $color }) => ($marked ? $color : 'none')};
	}
`;

export { StyledTabsContainer, StyledTab };
