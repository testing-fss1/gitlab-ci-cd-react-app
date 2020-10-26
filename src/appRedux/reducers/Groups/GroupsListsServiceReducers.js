import {
    GROUP_LIST_SERVICE_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    GroupsListData : [],
    GroupsListStatus : '',
    GroupsListStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case GROUP_LIST_SERVICE_SUCCESS: {
        return {
          ...state,
          GroupsListData : action.data,
          GroupsListStatus: action.status,
          GroupsListStatusDescription: action.statusDescription
        };
      }
  
      default:
        return state;
    }
  }