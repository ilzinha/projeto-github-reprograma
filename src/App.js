import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path="/" render={ props => <Home {...props} /> } />
     <Route path="/userprofile" render={ props => <UserProfile {...props} /> } />
   </Switch>
    </div>
  );
}

export default App;