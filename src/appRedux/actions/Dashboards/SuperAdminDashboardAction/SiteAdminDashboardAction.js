import {
	SITE_ADMIN_DASHBOARD_LIST_ACTION,
	SITE_ADMIN_DASHBOARD_LIST_SUCCESS,
	SITE_ADMIN_DASHBOARD_LIST_ERROR,
	SITE_ADMIN_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const SiteAdminListService = (values) => {
	console.log("checking site",values);
	return {
	    type: SITE_ADMIN_DASHBOARD_LIST_ACTION,
	    values: values
	};
};

export const siteAdminDashboardSuccess = (SiteAdminDashboardList) => {
	return {
	    type: SITE_ADMIN_DASHBOARD_LIST_SUCCESS,
	    payload: SiteAdminDashboardList.data.data,
	    payloadStatus: SiteAdminDashboardList.data.status,
	    payloadStatusDes: SiteAdminDashboardList.data.status_description,
	};
}

export const siteAdminDashboardError = (SiteAdminDashboardList) => {
	return {
	    type: SITE_ADMIN_DASHBOARD_LIST_ERROR,
	    payload: SiteAdminDashboardList,
	};
}

