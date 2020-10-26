import {
    EDIT_SUBSCRIBER_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    EditSubscriberdata : [],
    EditSubscriberStatus : '',
    EditSubscriberStatusDescription : ''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case EDIT_SUBSCRIBER_SUCCESS: {
        return {
          ...state,
          EditSubscriberdata : action.data,
          EditSubscriberStatus: action.status,
          EditSubscriberStatusDescription: action.statusDescription
        };
      }
  
      default:
        return state;
    }
  }






















