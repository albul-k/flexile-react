import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory
} from "react-router-dom";

// Material UI
import { Container } from "@material-ui/core";

import browserHistory from './browserHistory';
import { AuthRoute } from "./utils/authRoute";

import './App.css';
import SignIn from './components/Signin';
import Dashboard from './components/Dashboard';

export const Flexile = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/signin' component={SignIn} exact />
          <AuthRoute component={RootDir} path={'/*'} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export const RootDir = (_: any) => {

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute component={Dashboard} exact path={'/dashboard'} />
        {/* <Route>
              <p> 404 not not</p>
            </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

function App() {

  return (
    <Container className="App">
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route component={Dashboard} exact path={'/dashboard'} />
          {/* <Route component={ErrorPage} exact path={'/error'} /> */}
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
