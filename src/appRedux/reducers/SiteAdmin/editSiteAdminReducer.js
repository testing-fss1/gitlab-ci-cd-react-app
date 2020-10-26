import {
  EDIT_SITEADMIN_USERS_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  editSiteUsers : {}, editSiteUsersStatus: "", editSiteUsersStatusDescription: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case EDIT_SITEADMIN_USERS_SUCCESS: {
      return {
        ...state,
        editSiteUsers: action.data,
        editSiteUsersStatus: action.dataStatus,
        editSiteUsersStatusDescription: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}