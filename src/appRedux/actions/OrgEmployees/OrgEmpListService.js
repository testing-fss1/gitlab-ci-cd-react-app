import {
	ORG_EMP_LIST,
	ORG_EMP_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const OrgEmpListService = (state) => {
  return {
    type: ORG_EMP_LIST,
    state: state
  }
};

export const OrgEmpListServiceSuccess = (data) => {
  return {
    type: ORG_EMP_LIST_SUCCESS,
    data : data.data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description,
    total_count : data.total_count
  }
};