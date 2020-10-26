import {
	COMPOSE_VOICEMAIL_SUCCESS
} from "constants/ActionTypes";

	const INIT_STATE = {
		ComposeData : '', ComposeVoiceMailStatus : '',
	};
	
	export default (state = INIT_STATE, action) => {
		switch (action.type) {
	
			case COMPOSE_VOICEMAIL_SUCCESS: {
				return {
					...state,
					ComposeData: action.data,
					ComposeVoiceMailStatus : action.status
				};
			}
	
			default:
				return state;
		}
	}