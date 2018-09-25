import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo=>{
       // console.log(book);
       return(
         <TodoItem  key={todo.title} todo={todo} />
       );
      });
    }

    return (
      <div className="Todos">
      <h3>Books</h3>
          {todoItems}
      </div>
    );
  }
}



export default Todos;
