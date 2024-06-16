import { v4 } from 'uuid';
import { PLANET_DATA } from '../../constants/planet-data';
import { StyledMenuName, StyledMenu } from './nav-menu.styles';
import { Link } from 'react-router-dom';

const NavMenu = ({ showMenu, setShowMenu }) => {
	return (
		<StyledMenu $menu={showMenu}>
			{PLANET_DATA.map(planet => (
				<StyledMenuName key={v4()} $color={planet.color}>
					<Link onClick={() => setShowMenu(!showMenu)} to={planet.path}>
						{planet.name.toUpperCase()}
					</Link>
				</StyledMenuName>
			))}
		</StyledMenu>
	);
};

export default NavMenu;
