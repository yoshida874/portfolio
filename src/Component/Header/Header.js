import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ContactsIcon from "@material-ui/icons/Contacts";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";


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
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="sticky">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Vitamin Profile
          </Typography>
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