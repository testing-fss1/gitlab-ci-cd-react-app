import {
	SITE_ADMIN_USERS_LIST,
	SITE_ADMIN_USERS_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const SiteAdminUsersList = (values) => {
	return {
	    type: SITE_ADMIN_USERS_LIST,
	    values: values
	};
};

export const SiteAdminUsersListSuccess = (payload) => {
	return {
	    type: SITE_ADMIN_USERS_LIST_SUCCESS,
	    payload: payload.data.data,
	    payloadStatus: payload.data.status,
	    payloadStatusDes: payload.data.status_description,
	};
}

