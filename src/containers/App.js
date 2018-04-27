import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as taskActions from '../actions/TaskActions';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import '../styles/index.css';

class App extends Component {

    componentDidMount() {
        this.props.taskActions.fetchTasks()
        this.handleGroupClick = this.handleGroupClick.bind(this);
        this.handleAllGroupsClick = this.handleAllGroupsClick.bind(this);
        this.handleTaskClick = this.handleTaskClick.bind(this);
    }

    handleGroupClick(group) {
        this.props.taskActions.toggleGroupVisibility(group);
    }

    handleTaskClick(group, taskID) {
        this.props.taskActions.toggleTask(group, taskID);
    }

    handleAllGroupsClick() {
        Object.keys(this.props.tasks).map((group) => {
            return this.props.taskActions.toggleGroupVisibility(group, true);
        })
    }

    render() {
        return (
          <div className="container">
            <div className="row">
                <div className="col-md-8 pageTitle">
                    <h4>Things To Do</h4>
                </div>
                <div className="col-md-4 allGroupsButton">
                    <small onClick={this.handleAllGroupsClick}>ALL GROUPS</small>
                </div>
            </div>
            <TaskList
              tasks={this.props.tasks}
              onGroupClick={this.handleGroupClick}
              onTaskClick={this.handleTaskClick}/>
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