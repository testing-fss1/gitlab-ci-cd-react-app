import {
  RESET_PASSWORD_DATA
} from "constants/ActionTypes";

const INIT_STATE = {
  statusDescription : "", status : ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case RESET_PASSWORD_DATA: {
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