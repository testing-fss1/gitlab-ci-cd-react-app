import {
  ADD_SITEADMIN_USERS_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  addSiteUsers : {}, addSiteUsersStatus: "", addSiteUsersStatusDescription: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ADD_SITEADMIN_USERS_SUCCESS: {
      return {
        ...state,
        addSiteUsers: action.data,
        addSiteUsersStatus: action.dataStatus,
        addSiteUsersStatusDescription: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}