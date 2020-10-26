import {
  GROUP_DASHBOARD_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  groupCount : 0 ,groupListData : []};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GROUP_DASHBOARD_LIST_SUCCESS: {
       return {
         ...state,
         groupCount: action.payload.total_count,
         groupListData :action.payload.data ,
      };
     }
    
    default:
      return state;
  }
}