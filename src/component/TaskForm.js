import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            status:false
        }
    }
    componentWillMount(){
        if (this.props.itemediting) {
            this.setState({
                id: this.props.itemediting.id,
                name: this.props.itemediting.name,
                status: this.props.itemediting.status,
            })
        }else{
            this.onClear();
        }
    }
    componentWillReceiveProps(nextprops){
        if (nextprops && nextprops.itemediting) {
            this.setState({
                id: nextprops.itemediting.id,
                name: nextprops.itemediting.name,
                status: nextprops.itemediting.status
            });
        }else if(!nextprops.itemediting){
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }
    onClose = ()=>{
        this.props.onCloseForm();
    }
    onChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        if(name === 'status'){
            value = event.target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }
    onSaveTask = (event)=>{
        event.preventDefault();
        // this.props.onSubmit(this.state);
        this.props.onSaveTask(this.state);
        this.onClose();
        this.onClear();
    }
    onClear(){
        this.setState({
            name : '',
            status : false
        });
    }
    render() {
        if (!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="panel-title" style={{display:'flex',justifyContent:'space-between',backgroundColor:'ActiveCaption'}}>
                        <span style={{fontSize:'30px',fontWeight:'bold'}}>{this.state.id != '' ? 'Cập nhật công việc' : 'Thêm công việc'}</span>
                        <span onClick={this.onClose} style={{cursor:'pointer',fontSize:'20px',display:'flex', alignItems:'center'}} className="far fa-times-circle"></span>

                    </div>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSaveTask}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" value={this.state.name} className="form-control" name="name" onChange={this.onChange}/>
                        </div>
                        <label>Trạng Thái :</label>
                        <select name="status" value={this.state.status} onChange={this.onChange} className="form-control" required="required">
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
                            <button type="button" onClick={() => this.onClear()} className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStatetoProp = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemediting : state.itemediting
    }
}
const mapDispatchtoProp = (dispatch,props) =>{
    return {
        onSaveTask : (task)=> {
            dispatch(action.SaveTask(task))
        },
        onCloseForm : (task)=>{
            dispatch(action.closeForm())
        }
    }
}
export default connect(mapStatetoProp,mapDispatchtoProp)(TaskForm);