import {
	NOTIFI_TYPES_STATUS_CHANGE,
} from "../../../constants/ActionTypes";

export const NotifiTypesStatusChange = (value, ornt_id, state) => {
  return {
    type: NOTIFI_TYPES_STATUS_CHANGE,
    value: value,
    ornt_id: ornt_id,
    state: state
  }
};