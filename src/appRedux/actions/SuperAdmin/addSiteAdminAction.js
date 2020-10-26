import {
	ADD_SITEADMIN_USERS, ADD_SITEADMIN_USERS_SUCCESS
} from "../../../constants/ActionTypes";

export const addSiteAdminUsers = (values) => {
  console.log('add-site-admin-users-in-actions : ', values);
  return {
    type: ADD_SITEADMIN_USERS,
    values:values
  }
};

export const addSiteAdminUsersSuccess = (data) => {
  console.log('add-site-admin-users-success-in-actions : ', data);
	return {
		type: ADD_SITEADMIN_USERS_SUCCESS,
		data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
	}
};

//Commit to Changes in Sprint1

/*export const addSiteAdminUsersSuccess = (data) => {
  console.log('add-site-admin-users-success-in-actions : ', data);
  return {
    type: ADD_SITEADMIN_USERS_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};*/