import {
	GROUP_MAPPED_ADD_SERVICE,
	GROUP_MAPPED_ADD_SERVICE_SUCCESS,
} from "../../../constants/ActionTypes";

export const GroupMappedAddService = (data) => {
  console.log("Actiondata:",data)
  return {
    type: GROUP_MAPPED_ADD_SERVICE,
    data : data
  }
};

export const GroupMappedAddServiceSuccess = (data) => {
  return {
    type: GROUP_MAPPED_ADD_SERVICE_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};