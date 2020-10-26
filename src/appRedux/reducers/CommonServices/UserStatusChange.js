import {
  USER_STATUS_CHANGE_SUCCESS,
  CHANGE_SUBSCRIBER_GET_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  UserStatusChangeServiceStatus : "",
  SubscriberChangeStatus : ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case USER_STATUS_CHANGE_SUCCESS: {
      return {
        ...state,
        UserStatusChangeServiceStatus: action.status,
      };
    }

     case CHANGE_SUBSCRIBER_GET_SUCCESS : {
      console.log("CommonServices",action.data.status)
      return {
        ...state,
        SubscriberChangeStatus : action.data.status,
      };
    }

    default:
      return state;
  }
}