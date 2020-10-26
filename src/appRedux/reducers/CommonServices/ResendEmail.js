import {
  RESEND_EMAIL_DATA
} from "constants/ActionTypes";

const INIT_STATE = {
  statusDescription : "", status : ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case RESEND_EMAIL_DATA: {
      return {
        ...state,
        status: action.status,
        statusDescription: action.statusDescription,
      };
    }

    default:
      return state;
  }
}