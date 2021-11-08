import React, { Component } from 'react';
import TaskSort from './TaskSort';
import TaskSearch from './TaskSearch';

class Control extends Component {
    render() {
        return (
            <div className="row mt-3">
                <TaskSearch/>
                <TaskSort/>
                
            </div>
        );
    }
}

export default Control;