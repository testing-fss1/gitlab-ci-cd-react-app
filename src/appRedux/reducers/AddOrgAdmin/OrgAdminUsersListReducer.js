import {
    ORG_ADMIN_USERS_LIST_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    orgAdminUsersListCount : 0 , orgAdminPayload : [], orgAdminPayloadStatus : "", orgAdminPayloadStatusDes : "" 
    };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case ORG_ADMIN_USERS_LIST_SUCCESS: {
        return {
          ...state,
          orgAdminUsersListCount: action.payload.total_count,
          orgAdminPayload: action.payload,
          orgAdminPayloadStatus: action.payloadStatus,
          orgAdminPayloadStatusDes: action.payloadStatusDes,
        };
      }
      
      default:
        return state;
    }
  }