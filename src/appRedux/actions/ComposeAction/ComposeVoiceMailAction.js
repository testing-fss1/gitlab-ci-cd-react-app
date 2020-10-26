import { COMPOSE_VOICEMAIL_ACTION, COMPOSE_VOICEMAIL_SUCCESS } from "../../../constants/ActionTypes";

export const ComposeVoiceMailAction = (values, checkedValue, finalComparedValueNotifiTypeId) => {
		console.log('composeMessageAction')
	return {
		type: COMPOSE_VOICEMAIL_ACTION,
		values: values,
		checkedValue: checkedValue,
		finalComparedValueNotifiTypeId: finalComparedValueNotifiTypeId
	}
};

export const ComposeVoiceMailSuccess = (data)=>{
	return{
		type : COMPOSE_VOICEMAIL_SUCCESS,
		data : data.data,
		status : data.status,
	}
}