import {
	ADD_NOTIFI_TYPES,
	ADD_NOTIFI_TYPES_SUCCESS,
} from "../../../constants/ActionTypes";

export const AddNotifiTypesService = (values) => {
  return {
    type: ADD_NOTIFI_TYPES,
    values: values
  }
};

export const AddNotifiTypesServiceSuccess = (data) => {
  return {
    type: ADD_NOTIFI_TYPES_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};