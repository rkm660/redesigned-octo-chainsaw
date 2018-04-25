import React, { Component } from 'react';
import TaskList from '../components/TaskList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        taskData: []
    };
}

  componentDidMount(){
      console.log("hello");
  }

  render() {
    return (
      <div className="App">
          <h1>Things To Do</h1>
          <TaskList
            taskData={this.state.taskData}
          />
      </div>
    );
  }
}

export default App;
