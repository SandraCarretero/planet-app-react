import { v4 } from 'uuid';
import {
	StyledInfo,
	StyledInfoData,
	StyledInfoTitle,
	StyledPlanetInfoContainer
} from './planet-info.styles';

const PlanetInfo = ({ planetData }) => {
	return (
		<StyledPlanetInfoContainer>
			{planetData.infoTitle.map((title, i) => (
				<StyledInfo key={v4()}>
					<StyledInfoTitle>{title.toLocaleUpperCase()}</StyledInfoTitle>
					<StyledInfoData>{planetData.infoData[i]}</StyledInfoData>
				</StyledInfo>
			))}
		</StyledPlanetInfoContainer>
	);
};

export default PlanetInfo;
