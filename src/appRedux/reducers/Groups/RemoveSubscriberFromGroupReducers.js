import {
    REMOVE_SUBSCRIBER_FROM_GROUP_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    RemoveSubscriberfromGroupData : [],
    RemoveSubscriberfromGroupStatus : '',
    RemoveSubscriberfromGroupStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case REMOVE_SUBSCRIBER_FROM_GROUP_SUCCESS: {
        return {
          ...state,
          RemoveSubscriberfromGroupData : action.data,
          RemoveSubscriberfromGroupStatus: action.dataStatus,
          RemoveSubscriberfromGroupStatusDescription: action.dataStatusDiscription
        };
      }
  
      default:
        return state;
    }
  }