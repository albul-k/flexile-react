import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// Material UI
import { Container } from "@material-ui/core";

import './App.css';
import SignIn from './views/Signin';
import Dashboard from './views/Dashboard';

import useToken from './utils/useToken';
// import browserHistory from "./utils/browserHistory";


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <SignIn setToken={setToken} />
  }

  return (
    <Container className="App">
      {/*// @ts-ignore */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path={'/dashboard'} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
