import tasks from '../tasks.json';

import {
    RECEIVE_TASKS
} from '../constants/TaskConstants'

function receiveTasks(jsonObj) {
    return {
        type: RECEIVE_TASKS,
        tasks: jsonObj
    }
}

export function fetchTasks() {
    return dispatch => {
        dispatch(receiveTasks(tasks));
    }

}