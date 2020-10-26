import {
	REMOVE_SUBSCRIBER_FROM_GROUP,
	REMOVE_SUBSCRIBER_FROM_GROUP_SUCCESS,
} from "../../../constants/ActionTypes";

export const RemoveSubscriberFromGroupService = (values,orng_id) => {
    console.log('RemoveSubscriberFromGroupService',values)
  return {
    type: REMOVE_SUBSCRIBER_FROM_GROUP,
    data:values,
    orng_id:orng_id
  }
};

export const RemoveSubscriberFromGroupServiceSuccess = (data) => {
  console.log('***RemoveSubscriberFromGroupServiceSuccessactions',data)
  return {
    type: REMOVE_SUBSCRIBER_FROM_GROUP_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};