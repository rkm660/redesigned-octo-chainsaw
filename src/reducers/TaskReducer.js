import {
	RECEIVE_TASKS
} from '../constants/TaskConstants'

const initialState = {
	tasks : {},
}

export default (state = initialState, action) => {
  switch (action.type) {
  	case RECEIVE_TASKS:
  		return {
  			tasks: action.tasks.reduce((dict, task) => {
  				let group = task.group;
  				delete task.group;
  				if (dict.hasOwnProperty(group)){
	  				dict[group] = dict[group].concat([task]);
  				}
  				else {
  					dict[group] = [task]
  				}
  				return dict;
  			}, {})
  		}
    default:
      return state
  }

}