import {
	StyledHamburguer,
	StyledTitle,
	StyledTitleContainer
} from './title.styles';

const Title = ({ showMenu, setShowMenu }) => {
	return (
		<StyledTitleContainer>
			<StyledTitle>THE PLANETS</StyledTitle>
			<StyledHamburguer
				onClick={() => setShowMenu(!showMenu)}
				src='/images/icon-hamburger.svg'
				alt='hamburger'
			/>
		</StyledTitleContainer>
	);
};

export default Title;
