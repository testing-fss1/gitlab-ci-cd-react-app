import {
	EDIT_SITEADMIN_USERS, EDIT_SITEADMIN_USERS_SUCCESS
} from "../../../constants/ActionTypes";

export const editSiteAdminUsers = (values, sm_memb_id) => {
  console.log('Edit site admin in actions : ', values, sm_memb_id);
  	return {
    	type: EDIT_SITEADMIN_USERS,
		values: values,
		sm_memb_id: sm_memb_id
  	}
};

export const editSiteAdminUsersSuccess = (data) => {
	return {
		type: EDIT_SITEADMIN_USERS_SUCCESS,
		data : data,
    	dataStatus : data.status,
    	dataStatusDiscription : data.status_description
	}
};

//Commit to Changes in Sprint1

/*export const editSiteAdminUsersSuccess = (data) => {
  return {
    type: EDIT_SITEADMIN_USERS_SUCCESS,
    data : data,
      dataStatus : data.status,
      dataStatusDiscription : data.status_description
  }
};*/