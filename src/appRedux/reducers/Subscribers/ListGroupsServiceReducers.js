import {
    GROUPS_LIST_SUCCESS
  } from "constants/ActionTypes";

const INIT_STATE = {
	ListGroupsServiceData : {}
};

export default (state = INIT_STATE, action) => { 
	switch (action.type) {

		case GROUPS_LIST_SUCCESS: {
			return {
				...state,
				ListGroupsServiceData: action.data,
			};
		}

		default:
			return state;
	}
}