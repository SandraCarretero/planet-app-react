import styled from 'styled-components';

const StyledMenu = styled.ul`
	position: absolute;
	width: 100%;
	padding-inline: 24px;
	background-color: #060724;
	border-bottom: 3px solid gray;
	transform: ${({ $menu }) => ($menu ? `translateX(0%)` : `translateX(-100%)`)};
	transition: ease-in-out 0.2s;
	z-index: 999;

	@media (min-width: 768px) {
		position: relative;
		display: flex;
		transform: translate(0);
		justify-content: space-around;
		border-bottom: 0.5px solid gray;
	}

	@media (min-width: 1280px) {
		position: static;
		justify-content: end;
		gap: 32px;
	}
`;

const StyledMenuName = styled.li`
	display: flex;
	align-items: center;
	color: white;
	height: 70px;
	font-family: 'Spartan', sans-serif;
	font-weight: bold;
	padding-left: 45px;
	border-bottom: 0.5px solid gray;
	position: relative;

	&::after {
		content: '';
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${({ $color }) => $color};
		position: absolute;
		left: 0px;
	}

	@media (min-width: 768px) {
		font-size: 11px;
		letter-spacing: 1px;
		line-height: 25px;
		padding-left: 0;
		gap: 33px;
		border-bottom: 0px;

		&::after {
			width: 0;
		}
	}

	@media (min-width: 1280px) {
		cursor: pointer;
	}
`;

export { StyledMenuName, StyledMenu };
