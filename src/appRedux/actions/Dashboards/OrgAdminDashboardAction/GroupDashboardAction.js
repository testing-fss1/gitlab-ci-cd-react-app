import {
	GROUP_DASHBOARD_LIST_ACTION,
	GROUP_DASHBOARD_LIST_SUCCESS,
	GROUP_DASHBOARD_LIST_ERROR ,
	GROUP_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const  groupDashboardService = (values) => {
	console.log("bhatia",values);
	return {
	    type: GROUP_DASHBOARD_LIST_ACTION,
	    values: values
	};
};


export const groupDashboardSuccess = (GroupDashboardList) => {
	return {
	    type: GROUP_DASHBOARD_LIST_SUCCESS,
	    payload: GroupDashboardList.data.data,
	    status :  GroupDashboardList, 
	};
}

export const groupDashboardError = (GroupDashboardList) => {
	return {
	    type: GROUP_DASHBOARD_LIST_ERROR,
	    payload: GroupDashboardList,
	};
}

