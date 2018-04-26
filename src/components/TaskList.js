import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './TaskGroup';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.handleGroupClick = this.handleGroupClick.bind(this);
    }

    handleGroupClick(group,e) {
    	e.preventDefault();
    	this.props.onGroupClick(group);
    }

    render() {
        return (
            <ul>
	        {Object.keys(this.props.tasks).map((group) => {
              return (<li key={group}><span onClick={(e) => this.handleGroupClick(group, e)}>{group}</span><TaskGroup key={group} group={group} groupTasks={this.props.tasks[group].groupTasks} onTaskClick={this.props.onTaskClick}/></li>);
          })}
	      </ul>
        );
    }
}

TaskList.propTypes = {
 	tasks: PropTypes.object,
 	onGroupClick: PropTypes.func,
 	onTaskClick: PropTypes.func
};

export default TaskList;