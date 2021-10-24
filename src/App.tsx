// import { StateContext } from "./utils/stateProvider";
// import browserHistory from "./utils/browserHistory";

import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  useRoutes,
} from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import useToken from './utils/useToken';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import Login from './pages/Login';


const Flexile = () => {
  const { token, setToken } = useToken();
  const content = useRoutes(routes);

  if (!token) {
    window.history.replaceState(null, '', "/login")
    return (
      <Login setToken={setToken}/>
    )
  }

  return (
    content
  )
};

const App = () => {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Flexile />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;