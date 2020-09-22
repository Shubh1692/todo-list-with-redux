import React, { Component } from 'react';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { get } from 'lodash'
import { constants } from '../Helper/Constant';
import { ModalAction } from '../app-style';

class AddEditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    /**
     * This method is life cycle of ReactJS used for set todo description on edit otherwise return null
     * @param {*} props Parent state of component
     * @param {*} state Current state of component
     * @returns updated state object or null
     */
    static getDerivedStateFromProps(props, state) {
        const data = get(props, 'data', {
            todo: ''
        });
        if (data && data.todo !== state.todo && !state.todo) {
            return {
                data: props.data,
                todo: get(props, 'data.todo', ''),
            };
        }
        return null;
    }


    /**
     * This method used for set current value of todo input
     * @param {*} event On change input event object for read input value
     */
    async handleChange(event) {
        const { name, value } = event.target;
        await this.setState({
            [name]: value
        });
    }

    /**
     * This method used for submit todo detail based on date
     * Calling dispatch action based on id for add/update todo
     */
    async handleSubmit() {
        const { todo } = this.state;
        const { id } = this.props;
        if (typeof id === 'number') 
            this.props.dispatch({ type: constants.UPDATE_TODO, payload: { todo: { todo, date: new Date() }, id } });
        else
            this.props.dispatch({ type: constants.ADD_NEW_TODO, payload: { todo: { todo, date: new Date() } } })
        await this.setState({ todo: '' });
        await this.props.handleClose();
    }

    render() {
        const { open, handleClose, id } = this.props;
        const { todo } = this.state;
        return (
            <Modal size={'mini'} open={open} onClose={handleClose}>
                <Modal.Header>  {id ? 'Update' : 'Add'} Todo</Modal.Header>
                <AvForm className="p-20" onValidSubmit={(e) => this.handleSubmit(e)}>
                    <Modal.Content>
                        <div className="ui form">
                            <div className="field">
                                <label>Text</label>
                                <AvField
                                    type="textarea"
                                    rows={4}
                                    className="form-control"
                                    name="todo"
                                    onChange={(e) => this.handleChange(e)}
                                    value={todo || ""}
                                    placeholder="Enter todo details*"
                                    validate={{
                                        required: {
                                            value: true,
                                            errorMessage: "This field is required to proceed",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </Modal.Content>
                    <ModalAction className="newTodoFooter">
                        <Button onClick={() => handleClose()}>CANCEL</Button>
                        <Button type="submit" primary> {id ? 'Update' : 'Add'}</Button>
                    </ModalAction>
                </AvForm>
            </Modal>
        );
    }
}

/**
 * This method used for get state from store 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        todoList: state
    }
}

export default connect(mapStateToProps)(AddEditTodo);