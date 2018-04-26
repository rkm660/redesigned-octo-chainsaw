import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskItem extends Component {

  render() {
  		return (
	      <div>
	        {this.props.id}
	      </div>
    );
  }
}

TaskItem.propTypes = {
 	id: PropTypes.number,
  group: PropTypes.string,
  task: PropTypes.string,
  dependencyIds: PropTypes.array,
  completedAt: PropTypes.number
};

export default TaskItem;