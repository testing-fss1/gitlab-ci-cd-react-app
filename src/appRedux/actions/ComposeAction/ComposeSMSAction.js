import { COMPOSE_SMS_ACTION, COMPOSE_SMS_SUCCESS } from "../../../constants/ActionTypes";

export const ComposeSMSAction = (values, checkedValue, finalComparedValueNotifiTypeId) => {
		console.log('composeMessageAction')
	return {
		type: COMPOSE_SMS_ACTION,
		values: values,
		checkedValue: checkedValue,
		finalComparedValueNotifiTypeId: finalComparedValueNotifiTypeId
	}
};

export const ComposeSMSSuccess = (data)=>{
	return{
		type : COMPOSE_SMS_SUCCESS,
		data : data.data,
		status : data.status,
	}
}


