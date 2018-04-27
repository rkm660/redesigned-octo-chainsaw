import tasksObj from '../tasks.json';

import {
  RECEIVE_TASKS,
  UPDATE_GROUP_VISIBILITY,
  UPDATE_TASK
} from '../constants/TaskConstants'

function receiveTasks(tasks) {
    return {
        type: RECEIVE_TASKS,
        tasks: tasks
    }
}

function updateGroupVisibility(group, bool){
	return {
		type: UPDATE_GROUP_VISIBILITY,
		group: group,
		bool: bool
	}
}

function updateTask(group, taskID){
	return {
		type: UPDATE_TASK,
		group : group,
		taskID: taskID
	}
}

export function fetchTasks() {
    return dispatch => {
        dispatch(receiveTasks(tasksObj));
    }
}

export function toggleGroupVisibility(group, bool=null){
	return dispatch => {
		dispatch(updateGroupVisibility(group, bool));
	}
}

export function toggleTask(group, taskID){
	return dispatch => {
		dispatch(updateTask(group, taskID));
	}
}