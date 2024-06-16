import styled from 'styled-components';

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 24px;
	padding-block: 16px;
	border-bottom: 1px solid #979797;
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
	cursor: pointer;
`;

export { StyledTitleContainer, StyledTitle, StyledHamburguer };
