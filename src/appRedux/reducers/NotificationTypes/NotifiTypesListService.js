import {
  NOTIFI_TYPES_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  NotifiTypesListServiceDataList: [],
  NotifiTypesListServiceDataStatus: "",
  NotifiTypesListServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case NOTIFI_TYPES_LIST_SUCCESS: {
      return {
        ...state,
        NotifiTypesListServiceDataList: action.data,
        NotifiTypesListServiceDataStatus: action.dataStatus,
        NotifiTypesListServiceDataStatusDes: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}