import styled from 'styled-components';

const StyledMenu = styled.ul`
	position: absolute;
	width: 100%;
	padding-inline: 1.5rem;
	background-color: #060724;
	border-bottom: 3px solid gray;
	transform: ${({ $menu }) => ($menu ? `translateX(0%)` : `translateX(-100%)`)};
	transition: ease-in-out 0.2s;
	z-index: 999;

	@media (min-width: 768px) {
		position: relative;
		transform: translateX(0%);
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #979797;
	}
`;

const StyledMenuName = styled.li`
	display: flex;
	align-items: center;
	color: white;
	height: 4.375rem;
	font-family: 'Spartan', sans-serif;
	font-size: 0.9375rem;
	font-weight: bold;
	padding-left: 2.8125rem;
	border-bottom: 0.0313rem solid gray;
	position: relative;

	@media (min-width: 768px) {
		padding-left: 0;
		border-bottom: 0;
	}

	&::after {
		content: '';
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background-color: ${({ $color }) => $color};
		position: absolute;
		left: 0rem;

		@media (min-width: 768px) {
			display: none;
		}
	}
`;

export { StyledMenuName, StyledMenu };
