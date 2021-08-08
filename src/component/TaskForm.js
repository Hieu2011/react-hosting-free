import React, { Component } from 'react';

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
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            })
        }
    }
    componentWillReceiveProps(nextprops){
        if (nextprops && nextprops.task) {
            this.setState({
                id: nextprops.task.id,
                name: nextprops.task.name,
                status: nextprops.task.status
            });
        }else if(!nextprops.task){
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }
    onClose = ()=>{
        this.props.onClose();
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
    addData = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClose();
        this.onClear();
    }
    onClear(){
        this.setState({
            name : '',
            status : false
        });
        this.onClose();
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="panel-title" style={{display:'flex',justifyContent:'space-between',backgroundColor:'ActiveCaption'}}>
                        <span style={{fontSize:'30px',fontWeight:'bold'}}>{this.state.id != '' ? 'Cập nhật công việc' : 'Thêm công việc'}</span>
                        <span onClick={this.onClose} style={{cursor:'pointer',fontSize:'20px',display:'flex', alignItems:'center'}} className="far fa-times-circle"></span>

                    </div>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.addData}>
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

export default TaskForm;