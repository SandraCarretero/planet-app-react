import { v4 } from 'uuid';
import PlanetImg from '../PlanetImg/PlanetImg';
import Tabs from '../Tabs/Tabs';
import {
	StyledContainer,
	StyledInfo,
	StyledInfoData,
	StyledInfoTitle,
	StyledPlanetInfoContainer,
	StyledPlanetText,
	StyledPlanetTitle,
	StyledTextContainer
} from './container.styles';

const Container = ({
	planetData,
	markedTab,
	planetSize,
	setMarkedTab,
	planetColor
}) => {
	return (
		<StyledContainer>
			<Tabs
				markedTab={markedTab}
				setMarkedTab={setMarkedTab}
				planetColor={planetColor}
			/>
			<PlanetImg
				markedTab={markedTab}
				planetData={planetData}
				planetSize={planetSize}
			/>
			<StyledTextContainer>
				<StyledPlanetTitle>{planetData.name.toUpperCase()}</StyledPlanetTitle>
				<StyledPlanetText>{planetData.text[markedTab]}</StyledPlanetText>
				<StyledPlanetText>
					Source: <a href={planetData.link}>Wikipedia</a>
					<img src='/images/link-icon.svg' alt='' />
				</StyledPlanetText>
			</StyledTextContainer>

			<StyledPlanetInfoContainer>
				{planetData.infoTitle.map((title, i) => (
					<StyledInfo key={v4()}>
						<StyledInfoTitle>{title.toLocaleUpperCase()}</StyledInfoTitle>
						<StyledInfoData>{planetData.infoData[i]}</StyledInfoData>
					</StyledInfo>
				))}
			</StyledPlanetInfoContainer>
		</StyledContainer>
	);
};
export default Container;
