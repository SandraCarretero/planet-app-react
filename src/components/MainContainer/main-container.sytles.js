import styled from 'styled-components';

const StyledMainContainer = styled.main`
	font-family: 'Antonio', sans-serif;
	max-width: 1280px;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}

	@media (min-width: 1280px) {
		margin: auto;
	}
`;

export { StyledMainContainer };
