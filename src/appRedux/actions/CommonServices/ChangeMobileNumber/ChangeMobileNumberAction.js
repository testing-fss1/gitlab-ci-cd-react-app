import {
	CHANGE_MOBILE_REQUEST_ADD,
	CHANGE_MOBILE_REQUEST_ADD_SUCCESS,
} from "../../../../constants/ActionTypes";

export const ChangeMobileRequestAddService = (values, sm_memb_id) => {
  console.log("values",  values, sm_memb_id)
  return {
    type: CHANGE_MOBILE_REQUEST_ADD,
    values: values,
    sm_memb_id: sm_memb_id,
  }
};

export const ChangeMobileRequestAddServiceSuccess = (data) => {
  return {
    type: CHANGE_MOBILE_REQUEST_ADD_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};