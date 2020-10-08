import React from "react";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Works from "./Component/Works/Works";
import Contact from "./Component/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Works" component={Works} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
