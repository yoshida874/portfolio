import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ color: "#e0f2f1", backgroundColor: "#212121" }}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Vitamin Profile
          </Typography>
          <Button className={classes.Button}>about</Button>
          <Button className={classes.Button}>skill</Button>
          <Button className={classes.Button}>works</Button>
          <Button className={classes.Button}>cotact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
