import {
  NOTIFICATION_DASHBOARD_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
   notificationCount : 0 ,notificationListData :[]};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case NOTIFICATION_DASHBOARD_LIST_SUCCESS: {
       return {
         ...state,
         notificationCount: action.payload.total_count,
         notificationListData : action.payload.data
      };
     }
    
    default:
      return state;
  }
}