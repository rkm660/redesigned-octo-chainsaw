import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './TaskGroup';

class TaskList extends Component {

  render() {
  		return (
	      <div>
	        {Object.keys(this.props.tasks).map((group) => {
              return (<TaskGroup key={group} group={group} groupTasks={this.props.tasks[group]}/>);
          })}
	      </div>
     );
  }
}

TaskList.propTypes = {
 	tasks: PropTypes.object
};

export default TaskList;