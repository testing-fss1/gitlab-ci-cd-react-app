import {
	ORG_ADMIN_USERS_LIST,
	ORG_ADMIN_USERS_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const OrgAdminUsersList = (values) => {
	console.log("OrgAdminUsersListActions:",values)
	return {
	    type: ORG_ADMIN_USERS_LIST,
	    values: values
	};
};

export const OrgAdminUsersListSuccess = (payload) => {
	return {
	    type: ORG_ADMIN_USERS_LIST_SUCCESS,
	    payload: payload.data.data,
	    payloadStatus: payload.data.status,
	    payloadStatusDes: payload.data.status_description,
	};
}

