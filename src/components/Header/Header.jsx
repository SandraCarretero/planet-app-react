import { StyledHeader } from './header.styles';
import Title from '../Title/Title';
import Tabs from '../Tabs/Tabs';
import NavMenu from '../NavMenu/NavMenu';

const Header = ({
	markedTab,
	setMarkedTab,
	showMenu,
	setShowMenu,
	planetColor
}) => {
	return (
		<StyledHeader>
			<Title showMenu={showMenu} setShowMenu={setShowMenu} />
			<NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
			<Tabs
				markedTab={markedTab}
				setMarkedTab={setMarkedTab}
				planetColor={planetColor}
			/>
		</StyledHeader>
	);
};

export default Header;
