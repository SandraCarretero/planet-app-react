import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;
