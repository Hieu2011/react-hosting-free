import React, { Component } from 'react';

class TaskSearch extends Component {
    constructor(props) {
        super(props);
        this.state={
            keywork:''
        }
    }
    onChange = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    onSearch = () =>{
        var keywork = this.state.keywork;
        this.props.onSearch(keywork);
    }
    render() {
        var {keywork} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                <input type="text" value={keywork} name="keywork" onChange={this.onChange} className="form-control" placeholder="Nhập từ khóa..." />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                    <span className="fa fa-search mr-3" />Tìm
                    </button>
                </span>
                </div>
            </div>
        );
    }
}

export default TaskSearch;