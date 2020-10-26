import {
  EDIT_NOTIFI_TYPES_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  EditNotifiTypesServiceDataStatus: "",
  EditNotifiTypesServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case EDIT_NOTIFI_TYPES_SUCCESS: {
      console.log("notification data",action.data.data)
      return {
        ...state,
        EditNotifiTypesServiceDataStatus: action.data.data.status,
        EditNotifiTypesServiceDataStatusDes: action.data.data.status_description
      };
    }

    default:
      return state;
  }
}