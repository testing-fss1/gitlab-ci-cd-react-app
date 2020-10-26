import {
    SITE_ADMIN_USERS_LIST_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
        siteAdminUsersListCount : 0 , payload : [], payloadStatus : "", payloadStatusDes : "" 
    };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case SITE_ADMIN_USERS_LIST_SUCCESS: {
        return {
          ...state,
          siteAdminUsersListCount: action.payload.total_count,
          payload: action.payload,
          payloadStatus: action.payloadStatus,
          payloadStatusDes: action.payloadStatusDes,
        };
      }
      
      default:
        return state;
    }
  }