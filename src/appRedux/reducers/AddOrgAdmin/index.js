import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import OrgAdminDetailsGetReducer from "./OrgAdminDetailsGetReducer";
import OrgAdminUsersListReducer from "./OrgAdminUsersListReducer";
import addOrgAdminReducer from "./addOrgAdminReducer";

const OrgAdminReducer = combineReducers({
  routing: routerReducer,
  OrgAdminDetailsGetReducer: OrgAdminDetailsGetReducer,
  OrgAdminUsersListReducer: OrgAdminUsersListReducer,
  addOrgAdminReducer : addOrgAdminReducer,
});

export default OrgAdminReducer;