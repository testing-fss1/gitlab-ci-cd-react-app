import {
	USER_STATUS_CHANGE,
	USER_STATUS_CHANGE_SUCCESS,
	CHANGE_SUBSCRIBER_GET_REQUEST,
	CHANGE_SUBSCRIBER_GET_SUCCESS,
} from "../../../constants/ActionTypes";

export const UserStatusChange = (value, sm_memb_id) => {
	return {
		type: USER_STATUS_CHANGE,
		value: value,
		sm_memb_id: sm_memb_id
	}
};

export const UserStatusChangeSuccess = (data) => {
  return {
    type: USER_STATUS_CHANGE_SUCCESS,
    status: data.status
  };
};


export const changeSubscriberRequest= (data,orng_id,sm_memb_id,org_id)=>{
	return{
		type : CHANGE_SUBSCRIBER_GET_REQUEST,
		data : data,
		orng_id : orng_id, 
		sm_memb_id : sm_memb_id ,
		org_id : org_id,
	}
}


export const changeSubscriberSuccess = (data) => {
  return {
    type: CHANGE_SUBSCRIBER_GET_SUCCESS,
    data : data
  };
};
