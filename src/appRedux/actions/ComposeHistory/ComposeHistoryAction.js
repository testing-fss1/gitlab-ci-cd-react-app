import {
	COMPOSE_HISTORY_LIST_ACTION, COMPOSE_HISTORY_LIST_SUCCESS
} from "../../../constants/ActionTypes";

export const  ComposeHistoryService = () => {
	return {
	    type: COMPOSE_HISTORY_LIST_ACTION,
	};
};

export const ComposeHistorySuccess = (data) => {
	console.log("history in success actions ", data);
	return {
	    type: COMPOSE_HISTORY_LIST_SUCCESS,
	    data : data,
	};
}