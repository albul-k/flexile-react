import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// import InputIcon from '@material-ui/icons/Input';
import LogoutIcon from '@mui/icons-material/Logout';
// import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    navigate('/login', {replace: true});
  };

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        {/* <RouterLink to="/">
          <Logo />
        </RouterLink> */}
        <Box sx={{ flexGrow: 1 }} />
        <Hidden xlDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton 
            color="inherit"
            size="large"
            onClick={handleLogOut}
          >
            <LogoutIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
