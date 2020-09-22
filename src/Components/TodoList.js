import React, { Component } from "react";
import DeleteTodo from "./DeleteTodo";
import AddEditTodo from "./AddEditTodo";
import { constants } from "../Helper/Constant";
import { connect } from "react-redux";
import { get } from "lodash";
import moment from "moment";
import { Dropdown } from 'semantic-ui-react';
import { TodoDetail, ShowDate, TodosList, DropdownItem, TodosListCard } from '../app-style';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", openDelete: false, openEdit: false, open: false };
  }
  /**
   * This method used for confirmation delete modal
   */
  handleDelete () {
    const { id } = this.state;
    // dispatch delete action with payload for deleting particular data
    this.props.dispatch({
      type: constants.DELETE_TODO,
      payload: { id },
    });
    this.setState({ openDelete: false, id: "" });
  };
  render() {
    const { list } = this.props;
    const { openDelete, openEdit, id, data } = this.state;
    return (
      <TodosList >
        <TodosListCard className="ui middle aligned divided list">
          {list.map((data, index) => (
            <div key={index} className="item">
              <div className="">
                <div className="left floated  content ">
                  <TodoDetail >{get(data, "todo", "")}</TodoDetail>
                  <ShowDate>
                    {moment(get(data, "date", "00-00-0000 00:00")).format(
                      "D MMM  YYYY, h:mm a"
                    )}
                  </ShowDate>
                </div>
                <div className="right floated  content ">
                  <Dropdown item text={'Actions'}>
                    <Dropdown.Menu>
                      <DropdownItem onClick={() => this.setState({ openEdit: true, id: index, data: data })} >Edit </DropdownItem>
                      <DropdownItem onClick={() => this.setState({ openDelete: true, id: index })} >Delete </DropdownItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          ))}

        </TodosListCard>

        <DeleteTodo
          open={openDelete}
          handleClose={() => this.setState({ openDelete: false, id: "" })}
          handleDelete={() => this.handleDelete()}
        />
        <AddEditTodo
          open={openEdit}
          handleClose={() => this.setState({ openEdit: false, id: "" })}
          id={id}
          data={data}
        />
      </TodosList>
    );
  }
}
// get reducer state
const mapStateToProps = (state) => {
  return {
    todoList: state,
  };
};

export default connect(mapStateToProps)(TodoList);
