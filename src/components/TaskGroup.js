import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import CompletedSVG from '../assets/Completed.svg'; 
import IncompleteSVG from '../assets/Incomplete.svg'; 
import LockedSVG from '../assets/Locked.svg';

class TaskGroup extends Component {

  constructor(props){
    super(props);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.isTaskLocked = this.isTaskLocked.bind(this);
    this.taskSVG = this.taskSVG.bind(this);
  }

  handleTaskClick(group, taskID, e){
      e.preventDefault();
      this.props.onTaskClick(group, taskID);
  }

  isTaskLocked(task) {
    let isLocked = false;
    Object.keys(this.props.tasks).forEach((group) =>{
        this.props.tasks[group].groupTasks.forEach((t) => {
            if (task.dependencyIds.indexOf(t.id) !== -1 && task.id !== t.id){
                if (t.completedAt === null){
                    isLocked = true;
                }
            }
        })
    });
    return isLocked;
  }

  taskSVG(task){
      if (this.isTaskLocked(task)){
        return (<img src={LockedSVG}/>);
      }
      else if (task.completedAt === null){
        return (<img src={IncompleteSVG}/>);        
      } else {
        return (<img src={CompletedSVG}/>);
      }
  }

  render() {
  		return (
	        this.props.groupTasks.map((task) => {
              return (
                <div className="row taskItem" onClick={(e) => this.handleTaskClick(this.props.group, task.id, e)} key={task.id}>
                    <div className="col-md-1">
                        {this.taskSVG(task)}
                    </div>
                    <div className="col-md-11">
                    <TaskItem key={task.id} id={task.id} group={this.props.group} task={task.task} dependencyIds={task.dependencyIds} completedAt={task.completedAt}/>
                    </div>
                </div>
              );
          })
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