import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "./Home.css";
import backgroundImage from '../../images/Home.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover'
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="App">
          <Typography fontFamily="Segoe UI Emoji" variant="h3" to="/">
            material-ui分からん
          </Typography>
      </div>
    </div>
  );
}

export default Home;
