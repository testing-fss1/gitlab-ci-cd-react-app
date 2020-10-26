import {
	ADMIN_USER_DETAILS_GET, ADMIN_USER_DETAILS_GET_SUCCESS
} from "../../../constants/ActionTypes";

export const adminUserDetailsGet = (values) => {
  console.log('add-site-admin-users-in-actions : ', values);
  return {
    type: ADMIN_USER_DETAILS_GET,
    values:values
  }
};

export const adminUserDetailsGetSuccess = (data) => {
  console.log('add-site-admin-users-success-in-actions : ', data);
	return {
		type: ADMIN_USER_DETAILS_GET_SUCCESS,
		data : data,
	}
};