import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import clsx from "clsx";

import Home from "../Home/Home";
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from '@material-ui/core/Drawer';
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ContactsIcon from "@material-ui/icons/Contacts";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  Button: {
    color: "inherit",
    marginRight: theme.spacing(3),
  },
  AppBar: {
    color: "#e0f2f1",
    backgroundColor: "#212121"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

function Header() {
  const classes = useStyles();
  const anchor = 'right';
  const menus = [
    {'name': 'Home',  'Icon': <HomeIcon />},
    {'name': 'about',  'Icon': <PermIdentityIcon />},
    {'name': 'works',  'Icon': <WorkIcon />},
    {'name': 'contact','Icon': <ContactsIcon />}
  ]

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //モバイル時に表示するMenuListの作成
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menus.map((item) => (
          <ListItem button key={item.name} component={Link} to={item.name==='Home' ? './':'/'+ item.name}>
            <ListItemIcon>
              {item.Icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="sticky">
        <Toolbar>

          <Typography variant="h4" className={classes.title}>
            Vitamin Profile
          </Typography>

          {/* モバイル以下は表示しない*/}
          <Hidden xsDown implementation="css">
            <Button className={classes.Button} component={Link} to="/" startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button className={classes.Button} component={Link} to="/about" startIcon={<PermIdentityIcon />}>
              about
            </Button>
            <Button className={classes.Button} component={Link} to="/works" startIcon={<WorkIcon />}>
              works
            </Button>
            <Button className={classes.Button} component={Link} to="/contact" startIcon={<ContactsIcon />}>
              cotact
            </Button>
          </Hidden>

          {/* モバイルの場合表示*/}
          <Hidden smUp implementation="css">
          <IconButton
              onClick={toggleDrawer(anchor, true)}
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          </Hidden>

        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Works" component={Works} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default Header;