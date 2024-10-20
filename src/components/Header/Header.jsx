import { StyledHeader } from './header.styles';
import Title from '../Title/Title';
import NavMenu from '../NavMenu/NavMenu';

const Header = ({ showMenu, setShowMenu }) => {
	return (
		<StyledHeader>
			<Title showMenu={showMenu} setShowMenu={setShowMenu} />
			<NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
		</StyledHeader>
	);
};

export default Header;
