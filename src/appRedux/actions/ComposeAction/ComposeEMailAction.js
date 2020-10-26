import { COMPOSE_EMAIL_ACTION, COMPOSE_EMAIL_SUCCESS } from "../../../constants/ActionTypes";

export const ComposeEMailAction = (values, checkedValue, finalComparedValueNotifiTypeId) => {
		console.log('composeEMailAction')
	return {
		type: COMPOSE_EMAIL_ACTION,
		values: values,
		checkedValue: checkedValue,
		finalComparedValueNotifiTypeId: finalComparedValueNotifiTypeId
	}
};

export const ComposeEMailSuccess = (data)=>{
	console.log('ComposeEMailSuccess',data.status)
	return{
		type : COMPOSE_EMAIL_SUCCESS,
		data : data,
		status :data.status, 
	}
}