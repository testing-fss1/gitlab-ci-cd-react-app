import {
  CHANGE_EMAIL_REQUEST_ADD_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  ChangeEmailServiceDataStatus: "",
  ChangeEmailServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case CHANGE_EMAIL_REQUEST_ADD_SUCCESS: {
      return {
        ...state,
        ChangeEmailServiceDataStatus: action.dataStatus,
        ChangeEmailServiceDataStatusDes: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}