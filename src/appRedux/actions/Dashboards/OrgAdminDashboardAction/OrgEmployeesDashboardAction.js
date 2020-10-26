import {
	ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_ACTION,
	ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_SUCCESS,
	ORG_SCOPE__EMPLOYEE_DASHBOARD_LIST_ERROR ,
	ORG_EMPLOYEE_DASHBOARD_LIST_COUNT,
} from "../../../../constants/ActionTypes";

export const  OrgEmployeesListService = (values) => {
	console.log("oplo",values)
	return {
	    type: ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_ACTION,
	    values: values
	};
};


export const orgEmployeeDashboardSuccess = (OrgEmployeeDashboardList) => {
	return {
	    type: ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_SUCCESS,
	    payload: OrgEmployeeDashboardList.data.data,
	    status :  OrgEmployeeDashboardList, 
	};
}

export const orgEmployeeDashboardError = (OrgEmployeeDashboardList) => {
	return {
	    type: ORG_SCOPE__EMPLOYEE_DASHBOARD_LIST_ERROR,
	    payload: OrgEmployeeDashboardList,
	};
}

