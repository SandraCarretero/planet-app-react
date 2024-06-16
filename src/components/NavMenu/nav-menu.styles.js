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
`;

const StyledMenuName = styled.li`
	display: flex;
	align-items: center;
	color: white;
	height: 70px;
	font-family: 'Spartan', sans-serif;
	font-size: 15px;
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
`;

export { StyledMenuName, StyledMenu };
