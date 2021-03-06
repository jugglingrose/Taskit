
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';
import Nav from './components/Nav'; 
import Sidebar from './components/Sidebar';
import CreateEvent from './components/CreateEvent';
import Task from './components/Task';
import TaskListOrganizer from './components/TaskListOrganizer';
import VolunteerTaskList from './components/VolunteerTaskList';
import EventList from './components/EventList';
import ViewTask from './components/ViewTask';


class App extends React.Component {

  constructor() {
    super();
    this.state={
      events: [
        {
          id: "eventOne",
          name: "Animal Shelter Fundraiser",
          date: "October",
          location: "Austin",
          tasks: [{id: "foo",
          name: "Guest Greeter",
          desc: "Set up sign in booth and greet guests ",
          breakdown: ["set up table", "greet guests", "hand out name tags"],
          number_of_openings: 3 ,
          priority: "important"}, 
          {id: "bar",
          name: "Catering",
          desc: "set up food and drinks for the event",
          breakdown: ["set up beverage station", "assemble dessert table"],
          number_of_openings: 2 ,
          priority: "urgent"}],
        },
        {
          id: "eventTwo",
          name: "Second Event",
          date: "November",
          location: "Dallas",
          tasks: [{id: "bash",
          name: "Throw out the trash",
          desc: "Take out the trash after the event",
          breakdown: ["Grab bags from cabinet", "place garbage in bins outside", "separate recyclables"],
          number_of_openings: 3 ,
          priority: "important"}, 
          {id: "blah",
          name: "Sign in guests",
          desc: "this is a desc",
          breakdown: ["set up guest list", "sign in guests as they arrive"],
          number_of_openings: 3 ,
          priority: "urgent"}],
        }  
      ],
      cur_event: {
        id: "",
        name: "",
        date: "",
        location: "",
        tasks: [],
       },
      cur_task:{ },
    }
  }

  /*Events*/
  loadCurEvent = (id) => {
    /*Loads cur_event*/
    console.log("load current event");
    const cur_event = {...this.state.cur_event};
    this.setState({ cur_event : this.state.events[id]});
  }

  addEvent = () => {
    console.log("add new event called");
    const cur_event = {...this.state.cur_event};
    const events = [...this.state.events];
    events.push(cur_event);
    this.setState({ events : events});
  
  }

  updateEvent = (id) => {
    console.log("update event called", id);
    const cur_event = {...this.state.cur_event}
    const events = [...this.state.events];
    events[id] = cur_event;
    this.setState({events: events});
  }

  createBlankEvent = () => {
    const blank = {
      id: "",
      name: "",
      date: "",
      location: "",
      tasks: [],
    }
    this.setState({cur_event: blank});
  }

  deleteEvent = (id) => {
    console.log("delete event");
    const events = [...this.state.events];
    events.splice(id, 1);
    this.setState({ events : events});
  }

  /*Tasks*/

  addTask = () => {
      console.log("add task called"); 
      const cur_event = {...this.state.cur_event};
      const cur_task = {...this.state.cur_task};
      cur_event.tasks.push(cur_task);
      this.setState({cur_event : cur_event});
  }

  updateTask = (id) => {
    /* here we will do a fetch to update an existing task*/
    console.log("update task called", id);
    const cur_task = {...this.state.cur_task};
    const cur_event = {...this.state.cur_event};
    cur_event.tasks[id] = cur_task;
    this.setState({cur_event: cur_event});
  }

  delete = (idx) => {
    /* here we will do a fetch to delete an existing task*/
    const cur_event = {...this.state.cur_event};
    console.log(cur_event.tasks[idx]);
    cur_event.tasks.splice(idx, 1);
    this.setState({ cur_event : cur_event});   
  }

  /* This function will reset the data inside cur_task state to be blank*/
  createBlank = () => {
    const blank = {
      id: '',
      name: '',
      desc: '',
      breakdown: [""],
      number_of_openings: [ ""],
      priority: '',
    }
    this.setState({cur_task: blank});
  }

  loadCurTask = (id) => {
    /*Load cur_task */
    const cur_task = {...this.state.cur_task};
    this.setState({ cur_task : this.state.cur_event.tasks[id]});
  }

  loadRecipe = (id) => {
    console.log('load recipe called');
    /* here we do a fetch to set our cur_task based on the id we receive*/
  }

  /* Input Fields */

  /* pushes a blank string to our cur_task[fieldname] array. */
  appendInput = (fieldname) => {
    const cur_task = {...this.state.cur_task};
    const newInput = [""];
    const InputArray = cur_task[fieldname].concat(newInput);
    cur_task[fieldname] = InputArray;
    this.setState({cur_task : cur_task});
  }

  arrayChange = (fieldName, id) => (e) => {
    const value = e.target.value;
    const cur_task = {...this.state.cur_task};
    cur_task[fieldName][id] = value;
    this.setState({cur_task : cur_task});
  }

  eventChange = (fieldName) => (e) => {
    const value = e.target.value;
    const cur_event = {...this.state.cur_event};
    cur_event[fieldName] = value;
    this.setState({ cur_event: cur_event});
  }

  taskChange = (fieldName) => (e) => {
    const value = e.target.value;
    const cur_task = {...this.state.cur_task};
    cur_task[fieldName] = value;
    this.setState({ cur_task : cur_task});
  }


  render() {
    return (
      <div>
        <Nav/>
        <Sidebar/>
        <Switch>
          <Route exact path = "/" render={(props) => (<EventList {...props} events={this.state.events} deleteEvent={this.deleteEvent}/> )} /> 
          <Route exact path = "/event/:id" render={(props) => (<TaskListOrganizer {...props} events={this.state.events} cur_event={this.state.cur_event} delete={this.delete} loadCurEvent={this.loadCurEvent} />)} />
          <Route exact path = "/createevent" render={(props) => (<CreateEvent {...props} createBlankEvent={this.createBlankEvent} addEvent={this.addEvent} cur_event={this.state.cur_event} eventChange={this.eventChange} />)}/>)} />
          <Route exact path = "/editevent/:id" render={(props) => (<CreateEvent {...props} loadCurEvent={this.loadCurEvent} updateEvent={this.updateEvent} cur_event={this.state.cur_event} eventChange = {this.eventChange} /> )} />
          <Route exact path = "/viewtask/:id" render={(props) => <ViewTask {...props} cur_task={this.state.cur_task} loadCurTask={this.loadCurTask}  /> } />
          <Route exact path = "/add" render={(props) => (<Task {...props} arrayChange={this.arrayChange} taskChange={this.taskChange} cur_task={this.state.cur_task} 
          updateTask={this.updateTask} appendInput={this.appendInput} addTask={this.addTask} createBlank={this.createBlank} />)} />
          <Route exact path = "/edit/:id" render={(props) => (<Task {...props} loadCurTask={this.loadCurTask} arrayChange={this.arrayChange} taskChange={this.taskChange} cur_task={this.state.cur_task} 
          addTask={this.addTask} appendInput={this.appendInput} createBlank={this.createBlank}  updateTask={this.updateTask}  cur_event={this.state.cur_event} />)} />
          <Route exact path = "/volunteer" render={(props) => (<VolunteerTaskList {...props} cur_event={this.state.cur_event} /> )} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
