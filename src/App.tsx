// import {
//   BrowserRouter,
//   Switch,
//   Redirect,
//   Route,
// } from "react-router-dom";

// // Material UI
// import {
//   createMuiTheme,
//   createStyles,
//   makeStyles,
//   Theme,
//   // ThemeProvider,
// } from '@material-ui/core/styles';
// import { ruRU } from '@material-ui/core/locale';

// // Components
// import Main from './views/Main';
// import Users from './views/Users';
// import SignIn from './views/Signin';
// import Navigator from './views/Navigator';
// import Header from './views/Header';
// import Copyright from './views/Copyright';

// // Auth
// import {
//   AuthProvider,
//   // useAuthContext
// } from "./utils/auth";
// import { AuthRoute } from "./utils/authRoute";
// import { CssBaseline, Hidden } from "@material-ui/core";
// import {
//   // useContext,
//   useState
// } from "react";
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


// let theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#63ccff',
//       main: '#009be5',
//       dark: '#006db3',
//     },
//   },
//   typography: {
//     h5: {
//       fontWeight: 500,
//       fontSize: 26,
//       letterSpacing: 0.5,
//     },
//   },
//   shape: {
//     borderRadius: 8,
//   },
//   props: {
//     MuiTab: {
//       disableRipple: true,
//     },
//   },
//   mixins: {
//     toolbar: {
//       minHeight: 48,
//     },
//   },
// }, ruRU);

// theme = {
//   ...theme,
//   overrides: {
//     MuiDrawer: {
//       paper: {
//         backgroundColor: '#18202c',
//       },
//     },
//     MuiButton: {
//       label: {
//         textTransform: 'none',
//       },
//       contained: {
//         boxShadow: 'none',
//         '&:active': {
//           boxShadow: 'none',
//         },
//       },
//     },
//     MuiTabs: {
//       root: {
//         marginLeft: theme.spacing(1),
//       },
//       indicator: {
//         height: 3,
//         borderTopLeftRadius: 3,
//         borderTopRightRadius: 3,
//         backgroundColor: theme.palette.common.white,
//       },
//     },
//     MuiTab: {
//       root: {
//         textTransform: 'none',
//         margin: '0 16px',
//         minWidth: 0,
//         padding: 0,
//         [theme.breakpoints.up('md')]: {
//           padding: 0,
//           minWidth: 0,
//           color: 'red',
//         },
//       },
//     },
//     MuiIconButton: {
//       root: {
//         padding: theme.spacing(1),
//       },
//     },
//     MuiTooltip: {
//       tooltip: {
//         borderRadius: 4,
//       },
//     },
//     MuiDivider: {
//       root: {
//         backgroundColor: '#404854',
//       },
//     },
//     MuiListItemText: {
//       primary: {
//         fontWeight: theme.typography.fontWeightMedium,
//       },
//     },
//     MuiListItemIcon: {
//       root: {
//         color: 'inherit',
//         marginRight: 0,
//         '& svg': {
//           fontSize: 20,
//         },
//       },
//     },
//     MuiAvatar: {
//       root: {
//         width: 32,
//         height: 32,
//       },
//     },
//   },
// };

// const drawerWidth = 256;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       minHeight: '100vh',
//     },
//     drawer: {
//       [theme.breakpoints.up('sm')]: {
//         width: drawerWidth,
//         flexShrink: 0,
//       },
//     },
//     app: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     main: {
//       flex: 1,
//       padding: theme.spacing(6, 4),
//       background: '#eaeff1',
//     },
//     footer: {
//       padding: theme.spacing(2),
//       background: '#eaeff1',
//     },
//   }));


// function App() {
//   // const context = useAuthContext();
//   const { token, setToken } = useToken();

//   if (!token) {
//     return <SignIn setToken={setToken} />
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <AuthProvider>
//         <BrowserRouter>
//           <Switch>
//             {/* <AuthRoute exact path="/">
//             <Redirect to="/flexile/" />
//           </AuthRoute> */}
//             <AuthRoute component={Flexile} path={'/*'} />
//           </Switch>
//         </BrowserRouter>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export const Flexile = () => {
//   // const context = useAuthContext();
//   // const { state } = useContext(StateContext);
//   const classes = useStyles();

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <div className={classes.root}>
//           <CssBaseline />
//           <nav className={classes.drawer}>
//             <Hidden smUp implementation="js">
//               <Navigator
//                 PaperProps={{ style: { width: drawerWidth } }}
//                 variant="temporary"
//                 open={mobileOpen}
//                 onClose={handleDrawerToggle}
//               />
//             </Hidden>
//             <Hidden xsDown implementation="css">
//               <Navigator PaperProps={{ style: { width: drawerWidth } }} />
//             </Hidden>
//           </nav>
//           <div className={classes.app}>
//             <Header onDrawerToggle={handleDrawerToggle} />
//             <main className={classes.main}>
//               <Switch>
//                 <Route exact path="/">
//                   <Redirect to="/main" />
//                 </Route>
//                 <Route exact path='/users' component={Users} />
//                 <Route exact path='/main' component={Main} />
//               </Switch>
//             </main>
//             <footer className={classes.footer}>
//               <Copyright />
//             </footer>
//           </div>
//         </div>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;