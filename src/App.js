import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    projects: [],
    todos: []
  }
}

getTodos(){
  $.ajax({
    url: 'https://5ba3b8ff8da2f20014654c7d.mockapi.io/myBooks/books',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  });
}

getProjects(){
  this.setState({projects: []});
}

componentWillMount(){
  this.getProjects();
  this.getTodos();
}

componentDidMount(){
  this.getTodos();
}

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}

handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;