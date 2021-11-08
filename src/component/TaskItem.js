import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';
import * as types from '../constant/ActionType';

class TaskItem extends Component {
    onUpdateStatus = ()=>{
        //this.props.onUpdateStatus(this.props.task.id);
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () =>{
        this.props.onDelete(this.props.task.id);
    }
    onEditTask = () =>{
        this.props.openForm();
        this.props.onEditTask(this.props.task);
    }
    render() {
        var { task, index, onUpdateStatus} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={!task.status ? 'progress-bar bg-danger' :'progress-bar bg-success'}
                        style={{cursor:'pointer'}}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
                    <span className="fas fa-edit mr-3" />Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-3" />Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStatetoProp = (state) => {
    return {

    }
}
const mapDispatchtoProp = (dispatch,props) =>{
    return {
        onUpdateStatus : (id)=> {
            dispatch(action.updateStatus(id))
        },
        onDelete: (id)=>{
            dispatch(action.deleteTask(id))
        },
        openForm: ()=>{
            dispatch(action.openForm())
        },
        onEditTask: (task)=>{
            dispatch(action.editTask(task))
        }
        
    }
}
export default connect(mapStatetoProp,mapDispatchtoProp)(TaskItem);