import {
	SUBSCRIBERS_DASHBOARD_LIST_ACTION,
	SUBSCRIBERS_DASHBOARD_LIST_SUCCESS,
	SUBSCRIBERS_DASHBOARD_LIST_ERROR,
	SUBSCRIBERS_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const  SubscriberListService = (values) => {
	console.log("palo",values)
	return {
	    type: SUBSCRIBERS_DASHBOARD_LIST_ACTION,
	    values: values
	};
};

export const subscriberDashboardSuccess = (SubscriberDashboardList) => {
	return {
	    type: SUBSCRIBERS_DASHBOARD_LIST_SUCCESS,
	    payload: SubscriberDashboardList.data.data,
	};
}

export const subscriberDashboardError = (SubscriberDashboardList) => {
	return {
	    type: SUBSCRIBERS_DASHBOARD_LIST_ERROR,
	    payload: SubscriberDashboardList.data.data.list,
	};
}

