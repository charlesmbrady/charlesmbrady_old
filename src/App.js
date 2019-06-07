import React from 'react';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
/************************ Pages ***************************/
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Resources from './Pages/Resources/Resources';
import './App.css';
/************ Components  **************/
import Nav from './components/Nav/Nav';


/*_______________________ My profile app __________________________
To update charlesmbrady.com :

  - checkout to the "source" branch, make any changes and 
    update the branch with a git push

  - run "npm run deploy" from the root (might be able to just stop here actually?)

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
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/resources" component={Resources} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
=======
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
>>>>>>> parent of 9f996d8e... initial portfolio remake with react
  );
}

export default App;
