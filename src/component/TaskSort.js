import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';
import * as types from '../constant/ActionType';

class TaskSort extends Component {
    constructor(props) {
        super(props);
        
    }
    
    onClick(sortBy, sortValue){
        var sort = {
            by : sortBy,
            value : sortValue
        };
        this.props.onSort(sort);
    }
    render() {
        var {sort} = this.props;
        console.log(sort);
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp 
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => this.onClick('name',1)}>
                        <a 
                            role="button"
                            className={sort.by ==='name' && sort.value === 1 ? 'sort-selected' : ''}
                        >
                            <i className="fas fa-sort-alpha-up pr-4 pl-2"></i>
                            Tên A-Z
                        </a>
                    </li>
                    <li onClick={() => this.onClick('name',-1)}>
                        <a 
                            role="button"
                            className={sort.by ==='name' && sort.value === -1 ? 'sort-selected' : ''}
                        >
                            <i className="fas fa-sort-alpha-down pr-4 pl-2"></i>
                            Tên Z-A
                        </a>
                    </li>
                    <li>
                        <hr/>
                    </li>
                    <li onClick={() => this.onClick('status',1)}>
                        <a 
                            role="button"
                            className={sort.by ==='status' && sort.value === 1 ? 'sort-selected' : ''}
                        >
                            <span className="pl-2">Trạng Thái Kích Hoạt</span>
                        </a>
                    </li>
                    <li onClick={() => this.onClick('status',-1)}>
                        <a 
                            role="button"
                            className={sort.by ==='status' && sort.value === -1 ? 'sort-selected' : ''}
                        >
                            <span className="pl-2">
                                Trạng Thái Ẩn
                            </span>

                        </a>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}

const mapStatetoProp = (state) => {
    return {
        sort : state.sort
    }
}
const mapDispatchtoProp = (dispatch,props) =>{
    return {
        
        onSort: (sort)=>{
            dispatch(action.sortTask(sort))
        }
        
    }
}
export default connect(mapStatetoProp,mapDispatchtoProp)(TaskSort);