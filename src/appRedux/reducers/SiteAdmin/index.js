import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import addSiteAdminReducer from "./addSiteAdminReducer";
import editSiteAdminReducer from "./editSiteAdminReducer";
import SiteAdminUsersListReducer from "./SiteAdminUsersListReducer";

const SiteAdminReducer = combineReducers({
  routing: routerReducer,
  addSiteAdminReducer: addSiteAdminReducer,
  editSiteAdminReducer: editSiteAdminReducer,
  SiteAdminUsersListReducer: SiteAdminUsersListReducer,
});

export default SiteAdminReducer;
