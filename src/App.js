
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


class App extends React.Component {

  constructor() {
    super();
    this.state={
      events: [
        {
          id: "eventOne",
          name: "First Event",
          date: "October",
          location: "Austin",
          tasks: [{id: "foo",
          name: "set up the booth",
          desc: "set up booth",
          breakdown: ["set up table", "place a cover", "2 chairs"],
          number_of_openings: 3 ,
          priority: "important"}, 
          {id: "bar",
          name: "sweep the floor",
          desc: "sweep the stadium",
          breakdown: ["sweep", "put away broom"],
          number_of_openings: 3 ,
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
        data: "",
        location: "",
        tasks: [""],
       },
      cur_task:{ },
    }
  }

  addEvent = () => {
    console.log("add new event called");
    const cur_event = {...this.state.cur_event};
    const events = {...this.state.events};
    console.log(events);
    console.log(cur_event);
    events.push(cur_event);
    this.setState({ events : events});
  
  }

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
    console.log(this.state.cur_task);
    console.log(this.state.cur_event);
    const cur_task = {...this.state.cur_task};
    const cur_event = {...this.state.cur_event};
    cur_event.tasks[id] = cur_task;
    this.setState({cur_event: cur_event});
  }

  delete = (idx) => {
    /* here we will do a fetch to delete an existing task*/
    console.log("delete called");
    console.log(idx);
    const cur_event = {...this.state.cur_event};
    console.log(cur_event.tasks[idx]);
    cur_event.tasks.splice(idx, 1);
    this.setState({ cur_event : cur_event});
    
  }

  /* This function will reset the data inside cur_task state to be blank*/
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
    this.setState({cur_task: blank});
  }

  loadCurEvent = (id) => {
    /*here we load our cur_event*/
    console.log("load current event");
    const cur_event = {...this.state.cur_event};
    this.setState({ cur_event : this.state.events[id]});
  }

  loadCurTask = (id) => {
    console.log("load current task");
    console.log(this.state.cur_task);
    const cur_task = {...this.state.cur_task};
    this.setState({ cur_task : this.state.cur_event.tasks[id]});
  }

  loadRecipe = (id) => {
    console.log('load recipe called');
    /* here we do a fetch to set our cur_task based on the id we receive*/
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

  taskChange = (fieldName) => (e) => {
    const value = e.target.value;
    const cur_task = {...this.state.cur_task};
    cur_task[fieldName] = value;
    this.setState({ cur_task : cur_task});
  }

    arrayChange = (fieldName, id) => (e) => {
      console.log('array change');
      const value = e.target.value;
      const cur_task = {...this.state.cur_task};
      cur_task[fieldName][id] = value;
      this.setState({cur_task : cur_task});
    }
  render() {
    return (
      <div>
        <Nav/>
        <Sidebar/>
        <Switch>
          <Route exact path = "/" render={(props) => (<EventList {...props} events={this.state.events} /> )} /> 
          <Route exact path = "/event/:id" render={(props) => (<TaskListOrganizer {...props} events={this.state.events} cur_event={this.state.cur_event} delete={this.delete} loadCurEvent={this.loadCurEvent} />)} />
          <Route exact path = "/createevent" render={(props) => (<CreateEvent {...props} addEvent={this.addEvent} cur_event={this.cur_event} eventChange={this.eventChange} />)}/>)} />
          <Route exact path = "/add" render={(props) => (<Task {...props} arrayChange={this.arrayChange} taskChange={this.taskChange} cur_task={this.state.cur_task} 
          updateTask={this.updateTask} appendInput={this.appendInput} addTask={this.addTask} createBlank={this.createBlank} loadRecipe={this.loadRecipe} />)} />
          <Route exact path = "/edit/:id" render={(props) => (<Task {...props} loadCurTask={this.loadCurTask} arrayChange={this.arrayChange} taskChange={this.taskChange} cur_task={this.state.cur_task} 
          addTask={this.addTask} appendInput={this.appendInput} createBlank={this.createBlank}  updateTask={this.updateTask} loadRecipe={this.loadRecipe} cur_event={this.state.cur_event} />)} />
          <Route exact path = "/volunteer" render={(props) => (<VolunteerTaskList {...props} cur_event={this.state.cur_event} /> )} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
