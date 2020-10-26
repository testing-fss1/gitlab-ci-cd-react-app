import {
	ORG_EMPLOYEE_DASHBOARD_LIST_ACTION,
	ORG_EMPLOYEE_DASHBOARD_LIST_SUCCESS,
	ORG_EMPLOYEE_DASHBOARD_LIST_ERROR,
	ORG_EMPLOYEE_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const  OrgEmployeeListService = (values) => {
	console.log("kanche",values);
	return {
	    type: ORG_EMPLOYEE_DASHBOARD_LIST_ACTION,
	    values: values
	};
};

export const orgEmployeeDashboardSuccess = (OrgEmployeeDashboardList) => {
	return {
	    type: ORG_EMPLOYEE_DASHBOARD_LIST_SUCCESS,
	    payload: OrgEmployeeDashboardList.data.data,
	    status :  OrgEmployeeDashboardList.data.data.status, 
	};
}

export const orgEmployeeDashboardError = (OrgEmployeeDashboardList) => {
	return {
	    type: ORG_EMPLOYEE_DASHBOARD_LIST_ERROR,
	    payload: OrgEmployeeDashboardList,
	};
}

