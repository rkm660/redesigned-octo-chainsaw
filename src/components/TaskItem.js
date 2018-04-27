import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskItem extends Component {

    render() {
        return (
            <span onClick={this.handleClick}>{this.props.task}</span>
        );
    }
}

TaskItem.propTypes = {
    id: PropTypes.number,
    group: PropTypes.string,
    task: PropTypes.string,
    dependencyIds: PropTypes.array,
    completedAt: PropTypes.number,
};

export default TaskItem;