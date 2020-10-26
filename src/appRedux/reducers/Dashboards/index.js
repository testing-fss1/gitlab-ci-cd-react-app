import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import SuperAdminDashboardReducer from "./SuperAdminDashboardReducer";
import OrgAdminDashboardReducer from "./OrgAdminDashboardReducer";

const DashboardReducer = combineReducers({
  routing: routerReducer,
  SuperAdminDashboardReducer :SuperAdminDashboardReducer,
  OrgAdminDashboardReducer : OrgAdminDashboardReducer,

  });

export default DashboardReducer;