import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      tasks: [...prevState.tasks, this.input.value]
    }), () => {
      this.input.value = '';
    });
  }

  handleClick = (event, index) => {
      this.setState(prevState => ({
        tasks: [...prevState.tasks.slice(0, index), ...prevState.tasks.slice(index + 1, prevState.tasks.length)],
        completedTasks: [...prevState.completedTasks, prevState.tasks[index]]
      }), () => {
        console.log(this.state.completedTasks)
      })
  }

  render() {
    let currentTasks = this.state.tasks.map((task, index) => {
      return <li onClick={(e) => this.handleClick(e, index)}>{task}</li>
    })

    let compTasks = this.state.completedTasks.map((task, index) => {
      return <li onClick={(e) => this.handleClick(e, index)}>{task}</li>
    })

    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => this.input = input}/>
        </form>
        <ul>{currentTasks}</ul>
        <h2>Completed Tasks</h2>
        <ul>{compTasks}</ul>
      </div>
    );
  }

}

export default App;
