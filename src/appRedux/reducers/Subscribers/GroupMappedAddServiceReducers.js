import {
    GROUP_MAPPED_ADD_SERVICE_SUCCESS
  } from "constants/ActionTypes";

const INIT_STATE = {
	GroupMappedAddServiceData : [],
	GroupMappedAddServiceDataStatus : '',
	GroupMappedAddServiceDataStatusDescription : ''
};

export default (state = INIT_STATE, action) => { 
	switch (action.type) {

		case GROUP_MAPPED_ADD_SERVICE_SUCCESS: {
			return {
				...state,
				GroupMappedAddServiceDataStatus :action.dataStatus,
				GroupMappedAddServiceDataStatusDescription :action.dataStatusDiscription,
				GroupMappedAddServiceData : action.data,
			};
		}

		default:
			return state;
	}
}