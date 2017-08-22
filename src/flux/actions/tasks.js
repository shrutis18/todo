import d from '../dispatcher';
import * as ACT from '../types';
import ajax from '../../utils/ajax';

export function addTask(packt) {
    ajax({
        url:'http://localhost:3000/task',
        data:packt,
        sucessHook :(task)=>{
            addTaskSync(task);
        }
    });
}
export function addTaskSync(packt) {

    d.dispatch({type:ACT.ADD_TASK,payload:packt});
}

export function initTasks() {
    ajax({
        url:'http://localhost:3000/tasks',
        method:'get',
        sucessHook :(tasks)=>{
             d.dispatch({type:ACT.INIT_TASKS,payload:tasks});
        }
    });
}
    export function remove(packt) {
    ajax({
        url:'http://localhost:3000/tasks/task',
        method:'delete',
        data:packt,
        sucessHook :(removed)=>{
            removed && d.dispatch({type:ACT.REMOVED,payload:packt});
        }
    });
}