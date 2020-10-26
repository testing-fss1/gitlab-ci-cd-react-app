import {
	GROUPS_LIST,
	GROUPS_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const GroupsListServices = (data) => {
  console.log("Actiondata:",data)
  return {
    type: GROUPS_LIST,
    data : data
  }
};

export const GroupsListServicesSuccess = (data) => {
  return {
    type: GROUPS_LIST_SUCCESS,
    data : data,
    dataStatusDiscription : data.status_description
  }
};