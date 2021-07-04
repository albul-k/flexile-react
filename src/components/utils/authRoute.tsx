import { useAuthContext } from "../modules/context/auth";
// import {Redirect, Route} from "react-router-dom";
import { Route } from "react-router-dom";


// @ts-ignore
export const AuthRoute = ({ component: Component, ...rest }) => {
  const { user }: any = useAuthContext();
  return <Route
    {...rest}
    render={
      (props) => {
        return <Component {...props} />
      }
    }
  />
}
