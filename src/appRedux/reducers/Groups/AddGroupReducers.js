import {
    ADD_GROUP_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    AddGroupStatus : '',
    AddGroupStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case ADD_GROUP_SUCCESS: {
        return {
          ...state,
          AddGroupStatus: action.dataStatus,
          AddGroupStatusDescription: action.dataStatusDiscription
        };
      }
  
      default:
        return state;
    }
  }