import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/************************ Pages ***************************/
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/resources" component={Resources} /> */}
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
