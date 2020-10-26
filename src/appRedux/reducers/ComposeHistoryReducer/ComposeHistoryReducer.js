import {
    COMPOSE_HISTORY_LIST_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    ComposeHistoryData : '', ComposeHistoryStatus : '',
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case COMPOSE_HISTORY_LIST_SUCCESS: {
        return {
          ...state,
          ComposeHistoryData: action.data,
        };
      }
  
      default:
        return state;
    }
  }