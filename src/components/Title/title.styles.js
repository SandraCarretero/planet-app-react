import styled from 'styled-components';

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.5rem;
	padding-block: 1rem;
	border-bottom: 0.0625rem solid #979797;

	@media (min-width: 768px) {
		justify-content: center;
		border-bottom: 0;
	}
`;

const StyledTitle = styled.h1`
	margin: 0;
	color: white;
	font-size: 1.75rem;
	font-weight: 500;
`;

const StyledHamburguer = styled.img`
	width: 1.5rem;
	height: 1.0625rem;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;

export { StyledTitleContainer, StyledTitle, StyledHamburguer };
