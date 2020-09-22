import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { AppHeader, Title, TitleH3 } from '../app-style';
import AddEditTodo from '../Components/AddEditTodo';


function Header() {
    const [open, openAdd] = useState(false);
    return (
        <Fragment>
            <AppHeader >
                <Title><TitleH3>Todo List</TitleH3></Title>
                <button onClick={() => openAdd(true)} className="ui primary basic button">Add</button>
            </AppHeader>
            <AddEditTodo open={open} handleClose={() => openAdd(false)} />
        </Fragment>
    )
}

// get reducer state
const mapStateToProps = (state) => {
    return {
        todoList: state.todoReducer
    }
}
export default connect(mapStateToProps)(Header);