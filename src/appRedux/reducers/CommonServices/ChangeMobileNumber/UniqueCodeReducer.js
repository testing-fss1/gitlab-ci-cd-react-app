import {
  UNIQUE_MOBILE_CODE_VERIFICATION_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  UniqueCodeVerifyServiceDataStatus: "",
  UniqueCodeVerifyServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case UNIQUE_MOBILE_CODE_VERIFICATION_SUCCESS: {
      return {
        ...state,
        UniqueCodeVerifyServiceDataStatus: action.dataStatus,
        UniqueCodeVerifyServiceDataStatusDes: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}