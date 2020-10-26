import {
    ADD_SUBSCRIBER_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    AddSubscriberStatus : '',
    AddSubscriberStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case ADD_SUBSCRIBER_SUCCESS: {
        return {
          ...state,
          AddSubscriberStatus: action.dataStatus,
          AddSubscriberStatusDescription: action.dataStatusDiscription
        };
      }
  
      default:
        return state;
    }
  }