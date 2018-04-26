import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as taskActions from '../actions/TaskActions';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';

class App extends Component {

  componentDidMount(){
      this.props.taskActions.fetchTasks()
  }

  render() {
    return (
      <div className="App">
          <h1>Things To Do</h1>
          <TaskList
            tasks={this.props.tasks}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    tasks: state.TaskReducer.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

