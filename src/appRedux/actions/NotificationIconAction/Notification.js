import {NOTIFICATION_GET_LIST_REQUEST,NOTIFICATION_GET_LIST_SUCCESS} from "../../../constants/ActionTypes"

export const notificationListRequest = ()=>{
	console.log("hello venkatesh")
	return{
		type : NOTIFICATION_GET_LIST_REQUEST
	}
}

export const notificationListSuccess = (data)=>{
	return{
		type : NOTIFICATION_GET_LIST_SUCCESS,
		data : data
	}
}


/*export const addGroup = (values) => {
    console.log('GroupsaddActions',values)
  return {
    type: ADD_GROUP,
    data: values
  }
};*/