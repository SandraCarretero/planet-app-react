import { Route, Routes } from 'react-router-dom';
import Planets from '../pages/Planets/Planets';
import { PLANET_DATA } from '../constants/planet-data';
import { v4 } from 'uuid';

const Router = () => {
	return (
		<Routes>
			{PLANET_DATA.map(planetData => (
				<Route
					key={v4()}
					path={planetData.path}
					element={<Planets planetData={planetData} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
