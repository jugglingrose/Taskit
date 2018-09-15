
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'; 
import Sidebar from './components/Sidebar';
import CreateEvent from './components/CreateEvent';
import Task from './components/Task';
import TaskListOrganizer from './components/TaskListOrganizer';


import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state={
      user: {},
      cur_event: {},
      event: {},
      cur_task:{
        id: "test",
        desc: "this is a desc",
        breakdown: "this is a breakdown",
        number_of_openings: 3 
      },
      task: {},
    }
  }

  eventChange = (fieldName) => (e) => {
    const value = e.target.value;
    const cur_event = {...this.state.cur_event};
    cur_event[fieldName] = value;
    this.setState({ cur_event: cur_event});
  }

  taskChange = (fieldName) => (e) => {
    const value = e.target.value;
    const task = {...this.state.task};
    task[fieldName] = value;
    this.setState({ task : task});
  }


  render() {
    return (
      <div>
        <Nav/>
        <Sidebar/>
        <Switch>
          <Route exact path = "/" render={(props) => (<TaskListOrganizer />)} />
          <Route exact path = "/createevent" render={(props) => (<CreateEvent {...props} eventChange={this.eventChange} />)}/>)} />
          <Route exact path = "/add" render={(props) => (<Task {...props} taskChange={this.taskChange}/>)} />
          <Route exact path = "/edit" render={(props) => (<Task {...props} taskChange={this.taskChange} cur_task={this.state.cur_task} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;

