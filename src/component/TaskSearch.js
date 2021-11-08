import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';
import * as types from '../constant/ActionType';

class TaskSearch extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword:''
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
        var keyword = this.state.keyword;
        console.log(keyword);
        this.props.onSearch(keyword);
    }
    render() {
        var {keyword} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                <input type="text" value={keyword} name="keyword" onChange={this.onChange} className="form-control" placeholder="Nhập từ khóa..." />
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

const mapStatetoProp = (state) => {
    return {

    }
}
const mapDispatchtoProp = (dispatch,props) =>{
    return {
        
        onSearch: (keyword)=>{
            dispatch(action.searchTask(keyword))
        }
        
    }
}
export default connect(mapStatetoProp,mapDispatchtoProp)(TaskSearch);