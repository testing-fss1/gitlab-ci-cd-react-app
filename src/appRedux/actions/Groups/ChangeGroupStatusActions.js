import {
	GROUP_STATUS_CHANGE,
} from "../../../constants/ActionTypes";

export const groupStatusChange = (values,orng_id,page_number,number_of_records) => {
    console.log('GROUP_STATUS_CHANGE',values)
  return {
    type: GROUP_STATUS_CHANGE,
    data: values,
    orng_id:orng_id,
    page_number:page_number,
    number_of_records:number_of_records
  }
};