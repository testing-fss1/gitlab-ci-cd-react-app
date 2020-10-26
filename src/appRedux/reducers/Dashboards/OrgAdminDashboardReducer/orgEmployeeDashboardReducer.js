import {
  ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
   orgemployeeCount : 0 ,orgemployeeListdata : []};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_SUCCESS: {
       return {
         ...state,
         orgemployeeCount: action.payload.total_count,
         orgemployeeListdata : action.payload.data,
      };
     }
    
    default:
      return state;
  }
}