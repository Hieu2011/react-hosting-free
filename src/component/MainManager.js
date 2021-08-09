import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';
class MainManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm: false,
            taskEditting : null,
            filter:{
                filterName:'',
                filterStatus:-1
            },
            keywork:'',
            sortBy: 'name',
            sortValue: 1
        }

    }
    //f5 run
    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        }
    }
    s4(){
        return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
    }
    getGenderid(){
        return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()+ this.s4();
    }
   
    onToggleForm = () =>{
        if (this.state.taskEditting != null && this.state.isDisplayForm === true) {
            this.setState({
                isDisplayForm : true,
                taskEditting: null
            });
        }else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditting: null
            });
        }
       
    }
    onClose = () =>{
        this.setState({
            isDisplayForm : false,
            taskEditting: null
        });
    }
    onShow = () =>{
        this.setState({
            isDisplayForm : true
        });
    }
    onSubmit = (data) =>{
        console.log(data);
        var {tasks} = this.state;
        if (data.id === '') {
            //Add
            data.id = this.getGenderid();
            tasks.push(data);
        } else{
            //Edit
            var index = this.findId(data.id);
            if (index != -1) {
                tasks[index] = data;
            }
        }
       
        this.setState({
            tasks: tasks
            
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onUpdateStatus = (value) =>{
        var {tasks} = this.state;
        var index = this.findId(value);
        if(index != -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
    }
    onDelete = (value) =>{
        var {tasks} = this.state;
        var index = this.findId(value);
        if(index != -1){
            tasks.splice(index,1);
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
        this.onClose();
    }
    onUpdate = (id) =>{
        var {tasks} = this.state;
        var index = this.findId(id);
        var taskEditting = null;

        if (index != -1) {
            taskEditting = tasks[index];
            this.setState({
                taskEditting : taskEditting
            })
            
        }
        this.onShow();
    }
    onFilter = (filterName,filterStatus) =>{
        filterStatus = parseInt(filterStatus,10);
        filterName = filterName.toLowerCase();
        this.setState({
            filter:{
                filterName: filterName,
                filterStatus: filterStatus
            }
        }) ;
    }
    onSearch = (keywork)=>{
        this.setState({
            keywork : keywork.toLowerCase()
        });
    }
    onSort = (sortBy,sortValue)=>{
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }
    findId(id){
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index)=>{
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }
    render() {
        var { tasks,isDisplayForm , taskEditting , filter,keywork,sortBy,sortValue} = this.state; //this.state.tasks
        var emlDisplay = isDisplayForm ? <TaskForm onClose={this.onClose} onSubmit={this.onSubmit} task={taskEditting}/> : '';
        if(filter){
            if(filter.filterName){
                tasks = tasks.filter((task)=>{
                   return task = task.name.toLowerCase().indexOf(filter.filterName) != -1;
                })
            }
            tasks = tasks.filter((task)=>{
                if(filter.filterStatus === -1){
                    return task;
                }else{
                    return task.status === (filter.filterStatus === 1 ? true : false);
                }
            });
        }
        if(keywork != ''){
            tasks = tasks.filter((task)=>{
                return task = task.name.toLowerCase().indexOf(keywork) != -1;
            })
        }
        if(sortBy == 'name'){
            tasks.sort((a,b) =>{
                if (a.name > b.name) {
                    return sortValue;
                }else if(a.name < b.name){
                    return -sortValue;
                } else{
                    return 0;
                }
            });
        }else{
            tasks.sort((a,b) =>{
                if (a.status > b.status) {
                    return -sortValue;
                }else if(a.status < b.status){
                    return sortValue;
                } else{
                    return 0;
                }
            });
        }
        return (
            <div className="wraper">
                <div className="header">
                <div className="container">
                    <span className="title">
                    <h1>Quản lý Công việc</h1>
                    </span>
                </div>
                </div>
                <div className="body">
                <div className="container">
                    <div className="row">
                        <div className={isDisplayForm ? 'col-4' : ''}>
                           {emlDisplay}
                        </div>
                            <div className={!isDisplayForm ? 'col-12' : 'col-8'}>
                            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-3" />Thêm Công Việcs
                            </button>
                           
                            <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue = {sortValue}></Control>
                            <div className="row mt-3">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <TaskList tasks = {tasks} onUpdateStatus = {this.onUpdateStatus} 
                                    onDelete = {this.onDelete} onUpdate = {this.onUpdate} 
                                    onFilter={this.onFilter}></TaskList>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainManager;