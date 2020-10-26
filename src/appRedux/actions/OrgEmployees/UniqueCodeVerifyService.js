import {
	UNIQUE_CODE_VERIFICATION,
	UNIQUE_CODE_VERIFICATION_SUCCESS,
} from "../../../constants/ActionTypes";

export const UniqueCodeVerifyService = (values, sm_memb_id, column_name) => {
  return {
    type: UNIQUE_CODE_VERIFICATION,
    values: values,
    sm_memb_id: sm_memb_id,
    column_name: column_name
  }
};

export const UniqueCodeVerifyServiceSuccess = (data) => {
  return {
    type: UNIQUE_CODE_VERIFICATION_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};