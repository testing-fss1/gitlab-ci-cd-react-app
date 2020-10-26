import {
	ADD_SUBSCRIBER,
	ADD_SUBSCRIBER_SUCCESS,
} from "../../../constants/ActionTypes";

export const addSubscriber = (values) => {
  console.log("actions",values)
  return {
    type: ADD_SUBSCRIBER,
    data: values
  }
};

export const addSubscriberSucess = (data) => {
  return {
    type: ADD_SUBSCRIBER_SUCCESS,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};