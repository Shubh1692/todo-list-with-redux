import React, { Component } from 'react';
import NoTodoAdded from '../Components/NoTodoAdded';
import TodoList from '../Components/TodoList';
import { connect } from 'react-redux';
import { get } from 'lodash'
import { constants } from '../Helper/Constant';
import { CardList } from '../app-style';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  async componentDidMount() {
    await this.props.dispatch({ type: constants.LIST_TODO })
  }
  static getDerivedStateFromProps(props, state) {
    if (get(props.todoList, 'list', []) !== state.list) {
      return {
        list: get(props.todoList, 'list', []),
      };
    }
    return null;
  }
  render() {
    const { list } = this.state;
    return (
      <CardList >
        {list.length === 0 ? <NoTodoAdded /> : <TodoList list={list} />}
      </CardList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state
  }
};
export default connect(mapStateToProps)(ListContainer);