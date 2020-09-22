import React, { Component } from 'react';
import {NoTodo} from '../app-style';

class NoTodoAdded extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <NoTodo> No Todo Added</NoTodo>
         );
    }
}
 
export default NoTodoAdded;