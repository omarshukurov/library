import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title cant be blank')
    }else{
      /* this.setState({newProject:{
        id:uuid.v4(),
        title: this.refs.title.value,
        author: this.refs.author.value,
        publisher: this.refs.publisher.value,

      }}, function(){
        this.props.addProject(this.state.newProject);
      }); */
      fetch('http://5ba3b8ff8da2f20014654c7d.mockapi.io/myBooks/books', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.refs.title.value,
        author: this.refs.author.value,
        publisher: this.refs.publisher.value
      })
    })
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2> Add Book </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Author</label><br />
            <input type="text" ref="author"/>
          </div>
          <br/>
          <div>
            <label>Publisher</label><br />
            <input type="text" ref="publisher"/>
          </div>
          <br/>
          <button type="submit" value="">Submit </button>
          <br/>
        </form>
        <p>Refresh to see the book you added</p>
      </div>
    );
  }
}

export default AddProject;
