import React, { Component } from 'react';
import TaskSort from './TaskSort';
import TaskSearch from './TaskSearch';

class Control extends Component {
    render() {
        return (
            <div className="row mt-3">
                <TaskSearch onSearch={this.props.onSearch}/>
                <TaskSort onSort={this.props.onSort} sortBy = {this.props.sortBy} sortValue = {this.props.sortValue}/>
                
            </div>
        );
    }
}

export default Control;