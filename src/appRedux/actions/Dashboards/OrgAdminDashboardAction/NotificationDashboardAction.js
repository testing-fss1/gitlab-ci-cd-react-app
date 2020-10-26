import {
	NOTIFICATION_DASHBOARD_LIST_ACTION,
	NOTIFICATION_DASHBOARD_LIST_SUCCESS,
	NOTIFICATION_DASHBOARD_LIST_ERROR,
	NOTIFICATION_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const  NotificationService = (values) => {
	return {
	    type: NOTIFICATION_DASHBOARD_LIST_ACTION,
	    values: values
	};
};

export const notificationDashboardSuccess = (NotificationDashboardList) => {
	return {
	    type: NOTIFICATION_DASHBOARD_LIST_SUCCESS,
	    payload: NotificationDashboardList.data.data,
	};
}

export const notificationDashboardError = (NotificationDashboardList) => {
	return {
	    type: NOTIFICATION_DASHBOARD_LIST_ERROR,
	    payload: NotificationDashboardList.data.data.list,
	};
}

