import {
	GROUP_LIST_SERVICE,
	GROUP_LIST_SERVICE_SUCCESS,
} from "../../../constants/ActionTypes";

export const GroupsListService = (page_number,number_of_records) => {
    console.log('grouplistactions',page_number)
  return {
    type: GROUP_LIST_SERVICE,
    page_number : page_number,
    number_of_records : number_of_records
  }
};

export const GroupsListServiceSucess = (data) => {
  return {
    type: GROUP_LIST_SERVICE_SUCCESS,
    data : data,
    status : data.status,
    statusDescription : data.status_description
  }
};