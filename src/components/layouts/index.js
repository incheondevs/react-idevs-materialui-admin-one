import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
// Material-ui 컴포넌트들
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
// others
import Header from './Header.js';
import AsideNav from './AsideNav.js';
import HomePage from '../pages/Home.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const Layouts = props => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header onDrawerToggle={props.onDrawerToggle} />
      <AsideNav
        mobileOpen={props.mobileOpen}
        onDrawerToggle={props.onDrawerToggle}
      />
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </div>
  );
}

Layouts.propTypes = {
  mobileOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func,
};

export default Layouts;
