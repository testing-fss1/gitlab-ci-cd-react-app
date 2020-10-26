import {
	CHANGE_PSW,
	CHANGE_PASSWORD_RESPONSE,
} from "../../../constants/ActionTypes";

export const changePsw = (data) => {
  return {
    type: CHANGE_PSW,
    data: data
  }
};

export const changePasswordResponce = (data) => {
  return {
    type: CHANGE_PASSWORD_RESPONSE,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};