import {
  ADMIN_USER_DETAILS_GET_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  getAdminUserDetails: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ADMIN_USER_DETAILS_GET_SUCCESS: {
      return {
        ...state,
        getAdminUserDetails: action.data,
      };
    }

    default:
      return state;
  }
}