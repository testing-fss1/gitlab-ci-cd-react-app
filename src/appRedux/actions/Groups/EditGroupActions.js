import {
	EDIT_GROUP,
	EDIT_GROUP_SUCCESS,
} from "../../../constants/ActionTypes";

export const EditGroup = (values,orng_id,allowance_status,page_number,number_of_records) => {
    console.log('GroupseditActions',values)
  return {
    type: EDIT_GROUP,
    data: values,
    orng_id:orng_id,
    allowance_status:allowance_status,
    page_number:page_number,
    number_of_records:number_of_records
  }
};

export const EditGroupSuccess = (data) => {
  return {
    type: EDIT_GROUP_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};