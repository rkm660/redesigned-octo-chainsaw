import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './TaskGroup';
import GroupSVG from '../assets/Group.svg';  

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.handleGroupClick = this.handleGroupClick.bind(this);
    }

    handleGroupClick(group, e) {
        e.preventDefault();
        this.props.onGroupClick(group);
    }

    countCompletedTasks(group) {
        return this.props.tasks[group].groupTasks.reduce((count, task) => {
            count = task.completedAt !== null ? count + 1 : count;
            return count;
        }, 0);
    }

    render() {
        return (
            Object.keys(this.props.tasks).map((group) => {
                return (
                  <div key={group}>

                      <div onClick={(e) => this.handleGroupClick(group, e)}>
                          <div className="row groupTitle">
                              <div className="col-md-1">
                                <img className="GroupSVG" width="7px" height="9px" src={GroupSVG} /> 
                              </div>
                              <div className="col-md-11">
                                {group}
                              </div>
                          </div>
                          <div className="row groupSubtitle">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-11">
                              {this.countCompletedTasks(group)} OF {this.props.tasks[group].groupTasks.length} TASKS COMPLETE
                            </div>
                          </div>
                      </div>

                      {this.props.tasks[group].isVisible && 
                      <TaskGroup key={group} group={group} tasks={this.props.tasks} groupTasks={this.props.tasks[group].groupTasks} onTaskClick={this.props.onTaskClick}/>}

                  </div>);
            })
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.object,
    onGroupClick: PropTypes.func,
    onTaskClick: PropTypes.func
};

export default TaskList;