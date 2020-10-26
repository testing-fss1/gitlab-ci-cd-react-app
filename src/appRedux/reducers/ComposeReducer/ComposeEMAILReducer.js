import {
	COMPOSE_EMAIL_SUCCESS
} from "constants/ActionTypes";
	
	const INIT_STATE = {
		ComposeEmailData : '', ComposeEmailStatus : '',
	};
	
	export default (state = INIT_STATE, action) => {
		switch (action.type) {
	
			case COMPOSE_EMAIL_SUCCESS: {
				return {
					...state,
					ComposeEMailData: action.data,
					ComposeEMailStatus : action.status
				};
			}
	
			default:
				return state;
		}
	}