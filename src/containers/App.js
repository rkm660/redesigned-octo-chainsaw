import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as taskActions from '../actions/TaskActions';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';

class App extends Component {

  componentDidMount(){
      this.props.taskActions.fetchTasks()
      this.handleGroupClick = this.handleGroupClick.bind(this);
      this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  handleGroupClick(group){
    console.log(group);
    this.props.taskActions.toggleGroupVisibility(group);
  }

  handleTaskClick(group, taskID){
    console.log(group, taskID);
    this.props.taskActions.toggleTask(group, taskID);
  }

  render() {
    return (
      <div>
          <h1>Things To Do</h1>
          <TaskList
            tasks={this.props.tasks}
            onGroupClick={this.handleGroupClick}
            onTaskClick={this.handleTaskClick}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
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

