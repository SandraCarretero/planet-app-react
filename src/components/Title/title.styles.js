import styled from 'styled-components';

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 24px;
	padding-block: 16px;
	border-bottom: 1px solid #979797;

	@media (min-width: 768px) {
		justify-content: center;
		border-bottom: 0px;
	}

	@media (min-width: 1280px) {
		width: 30%;
		justify-content: start;
	}
`;

const StyledTitle = styled.h1`
	margin: 0;
	color: white;
	font-size: 28px;
	font-weight: 500;
`;

const StyledHamburguer = styled.img`
	width: 24px;
	height: 17px;

	@media (min-width: 768px) {
		display: none;
	}
`;

export { StyledTitleContainer, StyledTitle, StyledHamburguer };
