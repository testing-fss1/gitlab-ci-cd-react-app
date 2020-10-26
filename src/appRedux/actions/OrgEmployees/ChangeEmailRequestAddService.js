import {
	CHANGE_EMAIL_REQUEST_ADD,
	CHANGE_EMAIL_REQUEST_ADD_SUCCESS,
} from "../../../constants/ActionTypes";

export const ChangeEmailRequestAddService = (values, sm_memb_id) => {
  return {
    type: CHANGE_EMAIL_REQUEST_ADD,
    values: values,
    sm_memb_id: sm_memb_id,
  }
};

export const ChangeEmailRequestAddServiceSuccess = (data) => {
  return {
    type: CHANGE_EMAIL_REQUEST_ADD_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};