import {
  ADD_NOTIFI_TYPES_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  AddNotifiTypesServiceDataStatus: "",
  AddNotifiTypesServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ADD_NOTIFI_TYPES_SUCCESS: {
      return {
        ...state,
        AddNotifiTypesServiceDataStatus: action.dataStatus,
        AddNotifiTypesServiceDataStatusDes: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}