import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

class TaskGroup extends Component {

  constructor(props){
    super(props);
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  handleTaskClick(group, taskID, e){
      e.preventDefault();
      this.props.onTaskClick(group, taskID);
  }

  render() {
  		return (
	      <ul>
	        {this.props.groupTasks.map((task) => {
              return (<li onClick={(e) => this.handleTaskClick(this.props.group, task.id, e)} key={task.id}><TaskItem key={task.id} id={task.id} group={this.props.group} task={task.task} dependencyIds={task.dependencyIds} completedAt={task.completedAt}/></li>);
          })}
	      </ul>
    ); 
  }
}

TaskGroup.propTypes = {
 	group: PropTypes.string,
  groupTasks: PropTypes.array,
  onGroupClick: PropTypes.func,
  onTaskClick: PropTypes.func
};

export default TaskGroup;