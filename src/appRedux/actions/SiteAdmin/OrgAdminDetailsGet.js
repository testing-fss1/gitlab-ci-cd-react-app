import {
	ORG_ADMIN_DETAILS_GET, ORG_ADMIN_DETAILS_GET_SUCCESS
} from "../../../constants/ActionTypes";

export const orgAdminDetailsGet = (values) => {
  console.log('org admin details get in Actions : ', values);
  return {
    type: ORG_ADMIN_DETAILS_GET,
    values:values
  }
};

export const orgAdminDetailsGetSuccess = (payload) => {
  console.log('org admin details get sucess in Actions : ', payload);
	return {
		type: ORG_ADMIN_DETAILS_GET_SUCCESS,
		payload : payload.data,
	}
};