import React from "react";
import { NavLink } from "react-router-dom";
// Material-ui 컴포넌트들
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// 아이콘들
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import TableIcon from "@material-ui/icons/TableChart";
import ChartIcon from "@material-ui/icons/ShowChart";
import PagesIcon from "@material-ui/icons/Pages";
import IconsIcon from "@material-ui/icons/Mood";
import FontsIcon from "@material-ui/icons/FontDownload";
// others
import LogoImage from "../../assets/images/logo.png";

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    background: "#536dfe",
    padding: "16px 30px",
    color: "#ffffff",
    fontSize: "1.2em"
  },
  logoimg: {
    width: "32px",
    height: "32px",
    verticalAlign: "middle"
  },
  mainmenuBox: { padding: "25px 0" },
  mainmenuWrap: { padding: "15px 34px 15px 30px" },
  mainmenu: { color: "#ffffff" }
}));

const ResponsiveDrawer = props => {
  const classes = useStyles();

  return (
    <div>
      <NavLink to="/" activeClassName="selected">
        <div className={classes.toolbar}>
          <img src={LogoImage} alt="Logo" className={classes.logoimg} />
          &nbsp; Incheon Dev's
        </div>
      </NavLink>
      <Divider />
      <List className={classes.mainmenuBox}>
        <NavLink to="/" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <DashboardIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>대시보드</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/tables" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <TableIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>테이블</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <ChartIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>그래프</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <PagesIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>페이지</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List className={classes.mainmenuBox}>
        <NavLink to="/icons" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <IconsIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>아이콘들</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/fonts" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <FontsIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>폰트</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          <ListItem className={classes.mainmenuWrap} button>
            <ListItemIcon>
              <SettingsIcon className={classes.mainmenu} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.mainmenu}>기타</Typography>
            </ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default ResponsiveDrawer;
