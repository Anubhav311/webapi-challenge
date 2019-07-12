import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Projects from './components/users';
import User from './components/user';

import './App.css'; 

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Projects}/>
      <Route path="/api/users/:id" component={User}/>
    </div>
  );
}

export default App;
