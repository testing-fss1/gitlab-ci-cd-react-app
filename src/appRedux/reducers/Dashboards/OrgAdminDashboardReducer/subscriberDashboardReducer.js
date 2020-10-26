import {
  SUBSCRIBERS_DASHBOARD_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  subscriberCount : 0 ,subscriberListData : []};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUBSCRIBERS_DASHBOARD_LIST_SUCCESS: {
       return {
         ...state,
         subscriberCount: action.payload.total_count,
         subscriberListData : action.payload.data,
      };
     }
    
    default:
      return state;
  }
}