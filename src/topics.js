import React from 'react';
import {Route, Link} from 'react-router-dom';

const Topic = ({match}) => (
    
<h3>{match.params.id}</h3>

);

const Empty =()=> (

<h3>EMPTY!</h3>
  );

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={match.url + "/first"} >11</Link></li>      
      <li><Link to={match.url + "/second"} >22</Link></li>
      <li><Link to={match.url + "/third"} >33</Link></li>
    </ul>
    <hr/>
    <Route exact path={match.url} component={Empty}/>

    <Route path={match.url+'/:id'} component={Topic}/>
  </div>
);



export default Topics;

