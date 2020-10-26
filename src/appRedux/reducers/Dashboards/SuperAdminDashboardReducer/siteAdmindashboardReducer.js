import {
  SITE_ADMIN_DASHBOARD_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
   siteadminCount : 0 , listUsers : [], listUsersStatus : "", listUsersStatusDes : "" ,siteadmindata :[]};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SITE_ADMIN_DASHBOARD_LIST_SUCCESS: {
      return {
        ...state,
        siteadminCount: action.payload.total_count,
        listUsers: action.payload,
        listUsersStatus: action.payloadStatus,
        listUsersStatusDes: action.payloadStatusDes,
        siteadmindata : action.payload.data,
      };
    }
    
    default:
      return state;
  }
}