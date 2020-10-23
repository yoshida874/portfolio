import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';

import "./About.css";


function About() {
  return (
      <Container className='App'>
        <Typography variant="h3" to="/">
          About<span className='mgr-10'>me</span>
        </Typography>
        <Divider />
        name:yoshida874
        Birthday:1999-09-05<br/>
        school:国際情報工科自動車大学校<br/>
        <Typography  variant="h3" to="/">
          Skill
        </Typography>
        <Divider />
        Language<br/>
        python javascript PHP java HTML+CSS more...
        <br/>
        Framework & Tool<br/>
        Django React Node.js Git more...
      </Container>
  );
}

export default About;
