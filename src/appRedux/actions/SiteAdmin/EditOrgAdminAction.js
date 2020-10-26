import {
	EDIT_ORGADMIN_USERS, EDIT_ORGADMIN_USERS_SUCCESS
} from "../../../constants/ActionTypes";

export const editOrgAdminUsers = (values, sm_memb_id, org_id) => {
  console.log('edit-org-admin-users-in-actions : ', values, sm_memb_id, org_id);
  return {
    type: EDIT_ORGADMIN_USERS,
    values:values,
    sm_memb_id: sm_memb_id,
    org_id: org_id,
  }
};

export const editOrgAdminUsersSuccess = (data) => {
  console.log('edit-org-admin-users-success-in-actions : ', data);
	return {
		type: EDIT_ORGADMIN_USERS_SUCCESS,
		data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
	}
};