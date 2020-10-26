import {
    SUBSCRIBERS_LIST_SERVICE_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    SubscribersListServicedata : [],
    SubscribersListServiceStatus : '',
    SubscribersListServiceStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case SUBSCRIBERS_LIST_SERVICE_SUCCESS: {
        console.log("SUBSCRIBERS_LIST_SERVICE_SUCCESS",action.data)
        return {
          ...state,
          SubscribersListServicedata : action.data,
          SubscribersListServiceStatus: action.status,
          SubscribersListServiceStatusDescription: action.statusDescription
        };
      }
  
      default:
        return state;
    }
  }