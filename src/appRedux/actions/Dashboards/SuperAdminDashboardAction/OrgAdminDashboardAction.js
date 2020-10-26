import {
	ORG_ADMIN_DASHBOARD_LIST_ACTION,
	ORG_ADMIN_DASHBOARD_LIST_SUCCESS,
	ORG_ADMIN_DASHBOARD_LIST_ERROR,
	ORG_ADMIN_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const  OrgAdminListService = (values) => {
	console.log("checking",values);
	return {
	    type: ORG_ADMIN_DASHBOARD_LIST_ACTION,
	    values: values
	};
};

export const orgAdminDashboardSuccess = (OrgAdminDashboardList) => {
	return {
	    type: ORG_ADMIN_DASHBOARD_LIST_SUCCESS,
	    payload: OrgAdminDashboardList.data.data,
	    status : OrgAdminDashboardList.data.data.staus,
	};
}

export const orgAdminDashboardError = (OrgAdminDashboardList) => {
	return {
	    type: ORG_ADMIN_DASHBOARD_LIST_ERROR,
	    payload: OrgAdminDashboardList.data.data.list,
	};
}

