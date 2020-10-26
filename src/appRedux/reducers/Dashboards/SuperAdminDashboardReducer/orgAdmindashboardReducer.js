import {
  ORG_ADMIN_DASHBOARD_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
   orgadminCount : 0, orgadmindata : [] };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ORG_ADMIN_DASHBOARD_LIST_SUCCESS: {
      return {
        ...state,
        orgadminCount: action.payload.total_count,
        orgadmindata :action.payload.data
      };
    }
    
    default:
      return state;
  }
}