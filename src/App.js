
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
        name: "event name",
        desc: "this is a desc",
        breakdown: ["this is a breakdown"],
        number_of_openings: 3 ,
        priority: "urgent",
      },
      task: {},
    }
  }

  addTask = () => {
    console.log("add task called");
  }

  updateTask = () => {
    console.log("update task called");
  }

  createBlank = () => {
    console.log("blank recipe called");
    const blank = {
      id: '',
      name: '',
      desc: '',
      breakdown: [""],
      number_of_openings: [ ""],
      priority: '',
    }
    this.setState({cur_recipe: blank});
  }

  appendInput = (fieldname) => {
    console.log('append input called');
    const cur_task = {...this.state.cur_task};
    const newInput = [""];
    const InputArray = cur_task[fieldname].concat(newInput);
    cur_task[fieldname] = InputArray;
    this.setState({cur_task : cur_task});
  }

  eventChange = (fieldName) => (e) => {
    const value = e.target.value;
    const cur_event = {...this.state.cur_event};
    cur_event[fieldName] = value;
    this.setState({ cur_event: cur_event});
  }

  taskChange = (fieldName, id) => (e) => {
    const value = e.target.value;
   
    const cur_task = {...this.state.cur_task};
    cur_task[fieldName][id] = value;
    console.log(fieldName);
    console.log(cur_task[fieldName].id);
    console.log(cur_task.breakdown.id);
 
    this.setState({ cur_task : cur_task});
  }


  render() {
    return (
      <div>
        <Nav/>
        <Sidebar/>
        <Switch>
          <Route exact path = "/" render={(props) => (<TaskListOrganizer />)} />
          <Route exact path = "/createevent" render={(props) => (<CreateEvent {...props} eventChange={this.eventChange} />)}/>)} />
          <Route exact path = "/add" render={(props) => (<Task {...props} taskChange={this.taskChange} cur_task={this.state.cur_task} 
          updateTask={this.updateTask} appendInput={this.appendInput} createBlank={this.createBlank} />)} />
          <Route exact path = "/edit" render={(props) => (<Task {...props} taskChange={this.taskChange} cur_task={this.state.cur_task} 
          addTask={this.addTask} appendInput={this.appendInput} createBlank={this.createBlank} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;

