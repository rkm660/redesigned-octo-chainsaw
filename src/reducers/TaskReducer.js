import {
  RECEIVE_TASKS,
  UPDATE_GROUP_VISIBILITY,
  UPDATE_TASK
} from '../constants/TaskConstants'

const initialState = {
    tasks: {},
}

let isTaskLocked = (tasks, depIDs, taskID) => {
    let isLocked = false;
    Object.keys(tasks).forEach((group) =>{
        tasks[group].groupTasks.forEach((task) => {
            if (depIDs.indexOf(task.id) !== -1 && task.id !== taskID){
                if (task.completedAt === null){
                    isLocked = true;
                }
            }
        })
    });
    return isLocked;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return {
                tasks: action.tasks.reduce((dict, task) => {
                    let group = task.group;
                    delete task.group;
                    if (dict.hasOwnProperty(group)) {
                        if (dict[group].hasOwnProperty('groupTasks')) {
                            dict[group]['groupTasks'] = dict[group]['groupTasks'].concat([task]);
                        } else {
                            dict[group]['groupTasks'] = [task]
                        }
                    } else {
                        dict[group] = {
                            groupTasks : [task]
                        } 
                    }
                    dict[group]['isVisible'] = false;
                    return dict;
                }, {})
            }
        case UPDATE_GROUP_VISIBILITY:
            return {
                tasks: {
                    ...state.tasks,
                    [action.group] : {
                        ...state.tasks[action.group],
                        isVisible : action.bool ? action.bool : !state.tasks[action.group].isVisible
                    } 
                }
            }
        case UPDATE_TASK:
            return {
                tasks: {
                    ...state.tasks,
                    [action.group] : {
                        ...state.tasks[action.group],
                        groupTasks : state.tasks[action.group].groupTasks.map((task) => {
                            if (task.id === action.taskID){
                                let isLocked = task.completedAt === null && task.dependencyIds.length > 0 ? isTaskLocked(state.tasks, task.dependencyIds, task.id) : false;
                                if (isLocked){
                                    return task;
                                }
                                else {
                                    if (task.completedAt === null){
                                        return {...task, completedAt: Date.now()};
                                    }
                                    else {
                                        return {...task, completedAt: null};
                                    }
                                }
                            }
                            else {
                                return task;
                            }
                        })
                    } 
                }
            }       
        default:
            return state
    }

}