import React from 'react';
import PropTypes from 'prop-types';
// Material-ui 컴포넌트들
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 240; // 메뉴 Drawer 가로크기
const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  searchBox: {
    position: "relative",
    backgroundColor: "#eceff1",
    width: "256px",
    height: "38px",
    borderRadius: "19px",
    lineHeight: "38px",
    padding: "0 40px 0 24px",
  },
  searchField: {
    backgroundColor: "#eceff1",
    width: "100%",
    border: "none",
    fontSize: "1.2em",
  },
  searchIcon: {
    position: "absolute",
    top: "7px",
    right: "15px",
    color: "#304ffe"
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={ classes.appBar } color="default">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={ props.onDrawerToggle }
          className={ classes.menuButton }
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.searchBox}>
          <input id="searchField" className={ classes.searchField } />
          <SearchIcon className={classes.searchIcon}/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func,
};

export default Header;