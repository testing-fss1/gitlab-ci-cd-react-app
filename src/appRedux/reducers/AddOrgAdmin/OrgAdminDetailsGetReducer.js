import {
  ORG_ADMIN_DETAILS_GET_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  orgAdminUserDetailsGet: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ORG_ADMIN_DETAILS_GET_SUCCESS: {
      console.log('org admin details get sucess in Reducers : ', action);
      return {
        ...state,
        orgAdminUserDetailsGet: action.payload,
      };
    }

    default:
      return state;
  }
}