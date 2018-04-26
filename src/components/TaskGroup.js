import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

class TaskGroup extends Component {

  render() {
  		return (
	      <div>
	        {this.props.groupTasks.map((task) => {
              return (<TaskItem key={task.id} id={task.id} group={this.props.group} task={task.task} dependencyIds={task.dependencyIds} completedAt={task.completedAt}/>);
          })}
	      </div>
    ); 
  }
}

TaskGroup.propTypes = {
 	group: PropTypes.string,
  groupTasks: PropTypes.array
};

export default TaskGroup;