import {
	UNIQUE_MOBILE_CODE_VERIFICATION,
	UNIQUE_MOBILE_CODE_VERIFICATION_SUCCESS,
} from "../../../../constants/ActionTypes";

export const UniqueMobileCodeVerifyService = (values, sm_memb_id, column_name) => {
  console.log("venkatesh")
  return {
    type: UNIQUE_MOBILE_CODE_VERIFICATION,
    values: values,
    sm_memb_id: sm_memb_id,
    column_name: column_name
  }
};

export const UniqueMobileCodeVerifyServiceSuccess = (data) => {
  return {
    type: UNIQUE_MOBILE_CODE_VERIFICATION_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};