import {
	SUBSCRIBE_LIST_DATA,
  SUBSCRIBE_LIST_DATA_SUCCESS,
  SUBSCRIBE_LIST_UPDATE_DATA,
  SUBSCRIBE_LIST_UPDATE_DATA_SUCCESS
} from "../../../constants/ActionTypes";

export const SubscribeListService = (data,page_number,number_of_records,status) => {
    console.log('SUBSCRIBE_LIST_DATA',status)
  return {
    type: SUBSCRIBE_LIST_DATA,
    data: data,
    page_number:page_number,
    number_of_records:number_of_records,
    status:status
  }
};

export const SubscribeListServiceSuccess = (data) => {
  console.log('SubscribeListServiceSuccess data:  ', data);
  
  return {
    type: SUBSCRIBE_LIST_DATA_SUCCESS,
    data : data.data.data,
    total_count : data.data.total_count,
    status : data.status,
    status_description : data.status_description
  }
};

export const SubscribeListUpdateService = (data) => {
    console.log('SUBSCRIBE_LIST_UPDATE_DATA',data)
  return {
    type: SUBSCRIBE_LIST_UPDATE_DATA,
    data: data
  }
};

export const SubscribeListUpdateServiceSuccess = (data) => {
  return {
    type: SUBSCRIBE_LIST_UPDATE_DATA_SUCCESS,
    data : data.data,
    status : data.status,
    status_description : data.status_description
  }
};