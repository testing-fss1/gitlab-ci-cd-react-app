import {
	ACTIVATION_STATUS_CHECK,
	ACTIVATION_STATUS_SUCCESS,
  REGISTER_PSW,
  REGISTER_PSW_SUCCESS,
} from "../../../constants/ActionTypes";

export const activationStatusCheck = (dataCode) => {
  return {
    type: ACTIVATION_STATUS_CHECK,
    dataCode: dataCode
  }
};

export const activationStatusSuccess = (dataSuccess) => {
  return {
    type: ACTIVATION_STATUS_SUCCESS,
    dataSuccess: dataSuccess,
    dataSuccessStatus: dataSuccess.status,
    dataSuccessStatusDescription: dataSuccess.status_description
  }
};

export const registerPsw = (response) => {
  return {
    type: REGISTER_PSW,
    data: response
  }
};

export const registerPswSuccess = (success) => {
  return {
    type: REGISTER_PSW_SUCCESS,
    success: success,
    successStatus: success.status,
    successStatusDescription: success.status_description
  }
};