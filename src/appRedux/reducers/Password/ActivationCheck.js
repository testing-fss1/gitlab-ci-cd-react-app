import {
  ACTIVATION_STATUS_SUCCESS,
  REGISTER_PSW_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  activationGet : {},
  activationStatus: "",
  activationStatusDescription: "",
  registerPswGet : {},
  registerPswStatus: "",
  registerPswStatusDescription: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ACTIVATION_STATUS_SUCCESS: {
      return {
        ...state,
        activationGet: action.dataSuccess,
        activationStatus: action.dataSuccessStatus,
        activationStatusDescription: action.dataSuccessStatusDescription
      };
    }

    case REGISTER_PSW_SUCCESS: {
      return {
        ...state,
        registerPswGet: action.success,
        registerPswStatus: action.successStatus,
        registerPswStatusDescription: action.successStatusDescription
      };
    }

    default:
      return state;
  }
}