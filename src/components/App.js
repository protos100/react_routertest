import React, { Component } from 'react';
import  { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from '../home.js'
import Topics from '../topics.js'
import About from '../about.js'
class App extends Component{
  render = () => {
    return (

      <div>
        <Router>
        <div>
          <ul>
            <li><Link to="/" >Home </Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
    
          <hr/>
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/about" component={About} />
         </div>
        </Router>         
      </div>
      );
  }
};

export default App;
