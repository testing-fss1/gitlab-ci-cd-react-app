import {
	ADD_GROUP,
	ADD_GROUP_SUCCESS,
} from "../../../constants/ActionTypes";

export const addGroup = (values,allowance_status) => {
    console.log('GroupsaddActions',values)
  return {
    type: ADD_GROUP,
    data: values,
    allowance_status:allowance_status
  }
};

export const addGroupSucess = (data) => {
  return {
    type: ADD_GROUP_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};