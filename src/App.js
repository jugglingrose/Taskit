
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'; 
import Sidebar from './components/Sidebar';
import CreateEvent from './components/CreateEvent';
import Task from './components/Task';
import TaskList from './components/TaskList';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Sidebar/>
        <Switch>
          <Route exact path = "/" render={(props) => (<TaskList/>)} />
          <Route exact path = "/createevent" render={(props) => (<CreateEvent/>)} />
          <Route exact path = "/add" render={(props) => (<Task/>)} />
          <Route exact path = "/edit" render={(props) => (<Task/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
