import React, { Component } from 'react';

class TaskSort extends Component {
    constructor(props) {
        super(props);
        
    }
    
    onClick(sortBy, sortValue){
       
        this.props.onSort(sortBy,sortValue);
    }
    render() {
        var {sortBy, sortValue} = this.props;
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
                            className={sortBy ==='name' && sortValue === 1 ? 'sort-selected' : ''}
                        >
                            <i className="fas fa-sort-alpha-up pr-4 pl-2"></i>
                            Tên A-Z
                        </a>
                    </li>
                    <li onClick={() => this.onClick('name',-1)}>
                        <a 
                            role="button"
                            className={sortBy ==='name' && sortValue === -1 ? 'sort-selected' : ''}
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
                            className={sortBy ==='status' && sortValue === 1 ? 'sort-selected' : ''}
                        >
                            <span className="pl-2">Trạng Thái Kích Hoạt</span>
                        </a>
                    </li>
                    <li onClick={() => this.onClick('status',-1)}>
                        <a 
                            role="button"
                            className={sortBy ==='status' && sortValue === -1 ? 'sort-selected' : ''}
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

export default TaskSort;