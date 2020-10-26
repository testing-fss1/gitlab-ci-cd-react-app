import {
  CHANGE_PASSWORD_RESPONSE
} from "constants/ActionTypes";

const INIT_STATE = {
  editChangePsw : {}, editChangePswStatus: "", editChangePswStatusDescription: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case CHANGE_PASSWORD_RESPONSE: {
      return {
        ...state,
        editChangePsw: action.data,
        editChangePswStatus: action.dataStatus,
        editChangePswStatusDescription: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}