import {
    GROUP_DATA_GET_SERVICE_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    GroupGetData : [],
    GroupGetDataStatus : '',
    GroupGetDataStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case GROUP_DATA_GET_SERVICE_SUCCESS: {
        return {
          ...state,
          GroupGetData : action.data,
          GroupGetDataStatus: action.dataStatus,
          GroupGetDataStatusDescription: action.dataStatusDiscription
        };
      }
  
      default:
        return state;
    }
  }