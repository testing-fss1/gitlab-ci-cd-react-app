import {
    COMPOSE_SMS_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    ComposeData : '', ComposeStatus : '',
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case COMPOSE_SMS_SUCCESS: {
        return {
          ...state,
          ComposeData: action.data,
          ComposeStatus : action.status
        };
      }
  
      default:
        return state;
    }
  }