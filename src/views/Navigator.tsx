import React from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PollIcon from '@material-ui/icons/Poll';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Omit } from '@material-ui/types';
import i18next from "i18next";

const categories = [
  {
    id: 'Category header #1',
    children: [
      { id: 'Orders', route: '/dashboard', icon: <AssignmentIcon />, active: true },
      { id: 'Tab 1', route: '/dashboard', icon: <BookmarkBorderIcon /> },
      { id: 'Tab 2', route: '/dashboard', icon: <BookmarkBorderIcon /> },
      { id: 'Tab 3', route: '/dashboard', icon: <BookmarkBorderIcon /> },
      { id: 'Tab 4', route: '/dashboard', icon: <BookmarkBorderIcon /> },
      { id: 'Tab 5', route: '/dashboard', icon: <BookmarkBorderIcon /> },
    ],
  },
  {
    id: 'Category header #2',
    children: [
      { id: 'Users', route: '/users', icon: <PeopleIcon /> },
      { id: 'Analytics', route: '/analytics', icon: <PollIcon /> },
    ],
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  }));

export interface NavigatorProps extends Omit<DrawerProps, 'classes'> { }

function Navigator(props: NavigatorProps) {
  const classes = useStyles();
  const history = useHistory();
  const { ...other } = props;
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, route: string) => {
    history.push(route);
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Flexile
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            {i18next.t('Main view')}
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {i18next.t(id)}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, route, icon, active }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
                onClick={(event) => handleClick(event, route)}
              >
                {icon?<ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>:''}
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {i18next.t(childId)}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default Navigator;