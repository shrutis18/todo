import React from 'react';
import {Task} from './task';
import './tasks.css';
import tasksStore from '../flux/stores/tasks';
import {addTask} from '../flux/actions/tasks';
// import {initTasks} from '../flux/actions/tasks';


 export class Tasks extends React.Component {
    
        constructor(props) {
            super(props)
            this.state ={
                tasks :tasksStore.getTasks()
                // inputV :true
            }
            this.addTask = this.addTask.bind(this);
            // this.inputOnChange = this.inputOnChange.bind(this);
        }
        // inputOnChange(e){
        //     console.log(e.target.value);
        //     if(e.target.value === "")
        //         this.setState({inputV:false});
        // }

        componentDidMount() {// to get a fresh copy oftasks whenever the store changes
            tasksStore.on('change',() =>{
                this.setState({tasks:tasksStore.getTasks()});
            });
        }

        addTask(e) {
            const tasks = this.state.tasks.slice(0),
                input = this.input; 
                addTask({label:input.value,count:tasks.length});
                //this.setState({tasks})
            
        }

        render() {
            const {tasks} = this.state, 
            chl = [];
            for(const {_id,label} of tasks){
                chl.push(<Task key ={_id} id={_id}>{label}</Task>)
            }
        return (
            <div>
                <div className ="addItem">
                    <label>ITEM :
                        <input type ="text"ref ={(a) =>{this.input =a}}  name ="add"/>
                    </label>
                    <button type ="button" className ="btn-btn-seconadary"   onClick ={this.addTask}> ADD </button>
                </div>
                <h3>TODO</h3>
                    <table className ="containerList">
                    <div>{chl}</div>
                    </table>
            </div>
        );
        }
    
}