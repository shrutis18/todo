import React from 'react';
import {remove} from '../flux/actions/tasks';

 export class Task extends React.Component {
     constructor(props){
         super(props);
         this.onClick = this.onClick.bind(this);
     }
        onClick(e){
            remove({_id:this.props.id});
        }

        render() {
            return (
                <button type="button" onClick ={this.onClick} className="btn-btn-primary btn-lg btn-block">
                    {this.props.children}
                </button>    
            );
        }
}