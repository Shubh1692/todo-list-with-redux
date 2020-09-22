import styled from 'styled-components';
import { Modal, Dropdown } from 'semantic-ui-react'


export const CardList = styled.div`
    background-color:#fff;
    box-shadow: 1px 1px 6px 1px #a3d5d5;
    border-radius: 5px;
    width: initial;
    overflow-y: scroll;
  `;

export const ModalAction = styled(Modal.Actions)`
   margin:20px 0px;
   float: right;
  `;

export const AppHeader = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-bottom: 20px;
  `;

export const NoTodo = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #757575; 
  font-weight: bold;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  `;

export const Title = styled.div`
  align-self: center;
  `;
export const TitleH3 = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #757575;
  `

export const TodoDetail = styled.div`
  color: #303030;
  font-size:16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  `;

export const ShowDate = styled.div`
  color: #757575;
  font-size:12px;
  font-family: 'Open Sans', sans-serif;
  font-weight:400;
  `;

export const TodosList = styled.div`
  padding:15px;
  text-align:start;
  min-height: 400px;
  `;

export const DropdownItem = styled(Dropdown.Item)`
  margin:15px 0px 5px 0px;
  `;

export const TodosListCard = styled.div`
  border-bottom: 1px solid #37d5d5;
  padding-bottom: 30px!important;
  `;