import {
	NOTIFI_TYPES_LIST,
	NOTIFI_TYPES_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const NotifiTypesListService = (state) => {
  return {
    type: NOTIFI_TYPES_LIST,
    state: state
  }
};

export const NotifiTypesListServiceSuccess = (data) => {
  return {
    type: NOTIFI_TYPES_LIST_SUCCESS,
    data : data.data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};