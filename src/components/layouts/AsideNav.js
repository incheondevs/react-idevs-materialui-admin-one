import React from 'react';
import PropTypes from 'prop-types';
// Material-ui 컴포넌트들
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// others
import MainMenu from './MainMenu.js';

const drawerWidth = 240; // 메뉴 Drawer 가로크기
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    minHeight: "900px",
    boxShadow: "0 0 15px rgba(25, 25, 25, 0.5)",
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#304ffe",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AsideNav = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={ props.container }
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={ props.mobileOpen }
          onClose={ props.onDrawerToggle }
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <MainMenu />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          <MainMenu />
        </Drawer>
      </Hidden>
    </nav>
  );
}

AsideNav.propTypes = {
  container: PropTypes.object,
};

export default AsideNav;
