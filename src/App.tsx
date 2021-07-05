import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// Material UI
import { Container } from "@material-ui/core";

import browserHistory from "./views/browserHistory";
// import { History, createBrowserHistory } from 'history';
// import { AuthProvider, useAuthContext } from "./modules/context/auth";
// import { AuthRoute } from "./utils/authRoute";

import './App.css';
import SignIn from './views/Signin';
import Dashboard from './views/Dashboard';


function App() {

  return (
    <Container className="App">
      {/*// @ts-ignore */}
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route exact path='/signin' component={SignIn} />
          {/* <Route component={ErrorPage} exact path={'/error'} /> */}
          <Route exact path={'/dashboard'} component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
