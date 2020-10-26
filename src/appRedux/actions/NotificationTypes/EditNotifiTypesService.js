import {
	EDIT_NOTIFI_TYPES,
	EDIT_NOTIFI_TYPES_SUCCESS,
} from "../../../constants/ActionTypes";

export const EditNotifiTypesService = (values, ornt_id, NotifiTypesListState) => {
  return {
    type: EDIT_NOTIFI_TYPES,
    values: values,
    ornt_id: ornt_id,
    NotifiTypesListState: NotifiTypesListState
  }
};


export const EditNotifiTypesSuccess = (data) => {
  return {
    type: EDIT_NOTIFI_TYPES_SUCCESS,
    data: data,
  
  }
};