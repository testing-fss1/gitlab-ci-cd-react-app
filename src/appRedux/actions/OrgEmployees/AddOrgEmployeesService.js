import {
	ADD_ORG_EMPLOYEES,
	ADD_ORG_EMPLOYEES_SUCCESS,
} from "../../../constants/ActionTypes";

export const AddOrgEmployeesService = (values) => {
  return {
    type: ADD_ORG_EMPLOYEES,
    values: values
  }
};

export const AddOrgEmployeesServiceSuccess = (data) => {
  return {
    type: ADD_ORG_EMPLOYEES_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};