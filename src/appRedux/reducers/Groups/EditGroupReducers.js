import {
    EDIT_GROUP_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    EditGroupdata : [],
    EditGroupStatus : '',
    EditGroupStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case EDIT_GROUP_SUCCESS: {
        return {
          ...state,
          EditGroupdata : action.data,
          EditGroupStatus: action.status,
          EditGroupStatusDescription: action.statusDescription
        };
      }
  
      default:
        return state;
    }
  }