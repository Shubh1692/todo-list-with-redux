
import { constants } from '../Helper/Constant';

export function todoReducer(state = { list: [] }, action) {
  const { list } = state;
  switch (action.type) {
    case constants.ADD_NEW_TODO:
      return {
        ...state,
        list: [...list, action.payload.todo]
      };
    case constants.DELETE_TODO:
      list.splice(action.payload.id, 1);
      return {
        ...state,
        list
      };
    case constants.LIST_TODO:
      return {
        ...state
      };
    case constants.UPDATE_TODO:
      list[action.payload.id] = action.payload.todo
      return {
        list: list,
        ...state
      };
    default:
      return state
  }
}