import {
	SUBSCRIBERS_LIST_SERVICE,
	SUBSCRIBERS_LIST_SERVICE_SUCCESS,
} from "../../../constants/ActionTypes";

export const SubscribersListService = (page_number,number_of_records) => {
    console.log('subscriberslistservice')
  return {
    type: SUBSCRIBERS_LIST_SERVICE,
    page_number:page_number,
    number_of_records:number_of_records
  }
};

export const SubscribersListServiceSucess = (data) => {
  return {
    type: SUBSCRIBERS_LIST_SERVICE_SUCCESS,
    data : data,
    status : data.status,
    statusDescription : data.status_description
  }
};