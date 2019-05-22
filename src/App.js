import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
/************************ Pages ***************************/
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Resources from './Pages/Resources/Resources';
import './App.css';
/************ Components  **************/
import Nav from './components/Nav/Nav';


/*_______________________ My profile app __________________________
To update charlesmbrady.com :

  - checkout to the "source" branch, make any changes and 
    update the branch with a git push

  - run "npm run deploy" from the root

  - checkout to the "master" branch

  - run "git merge source"

  - checkout back to the "source" branch

*/

function App() {
  return (
    <Router>
     <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resources" component={Resources} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
