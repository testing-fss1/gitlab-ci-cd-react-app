import {
  CHANGE_MOBILE_REQUEST_ADD_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  ChangeMobileServiceDataStatus: "",
  ChangeMobileServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case CHANGE_MOBILE_REQUEST_ADD_SUCCESS: {
      return {
        ...state,
        ChangeMobileServiceDataStatus : action.dataStatus,
        ChangeMobileServiceDataStatusDes : action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}