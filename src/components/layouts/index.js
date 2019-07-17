import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
// Material-ui 컴포넌트들
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
// layout 컴포넌트
import Header from "./Header.js";
import AsideNav from "./AsideNav.js";
// page 컴포넌트
import HomePage from "../pages/Home.js";
import TablesPage from "../pages/Tables.js";
import IconsPage from "../pages/Icons.js";
import FontsPage from "../pages/Fonts";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
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
          <Route exact path="/tables" component={TablesPage} />
          <Route exact path="/icons" component={IconsPage} />
          <Route exact path="/fonts" component={FontsPage} />
        </Switch>
      </main>
    </div>
  );
};

Layouts.propTypes = {
  mobileOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func
};

export default Layouts;
