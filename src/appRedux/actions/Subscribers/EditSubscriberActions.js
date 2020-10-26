import {
	EDIT_SUBSCRIBER,
	EDIT_SUBSCRIBER_SUCCESS,
} from "../../../constants/ActionTypes";

export const EditSubscriber = (values, sm_memb_id,page_number,number_of_records) => {
  console.log('**eDITsUBactions',page_number)
  return {
    type: EDIT_SUBSCRIBER,
    data: values,
    sm_memb_id:sm_memb_id,
    page_number:page_number,
    number_of_records:number_of_records
  }
};

export const EditSubscriberSucess = (data) => {
  return {
    type: EDIT_SUBSCRIBER_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};