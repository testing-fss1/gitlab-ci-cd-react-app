import {
  ADD_ORGADMIN_USERS_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  addorgAdmindetails: [],addorgAdminstatus : "",addorgAdminstatusDescription : ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ADD_ORGADMIN_USERS_SUCCESS: {
      console.log('org admin details add sucess in Reducers : ', action);
      return {
        ...state,
        addorgAdmindetails: action.data,
        addorgAdminstatus : action.Status,
        addorgAdminstatusDescription : action.StatusDescription

      };
    }

    default:
      return state;
  }
}