import {
	ADD_ORGADMIN_USERS, ADD_ORGADMIN_USERS_SUCCESS
} from "../../../constants/ActionTypes";

export const addOrgAdminUsers = (values) => {
  console.log('add-org-admin-users-in-actions : ', values);
  return {
    type: ADD_ORGADMIN_USERS,
    values:values
  }
};

export const addOrgAdminUsersSuccess = (data) => {
  console.log('add-org-admin-users-success-in-actions : ', data);
	return {
		type: ADD_ORGADMIN_USERS_SUCCESS,
		data : data,
    Status : data.status,
    StatusDescription : data.status_description
	}
};