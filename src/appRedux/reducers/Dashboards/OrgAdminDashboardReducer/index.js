import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import orgEmployeeDashboardReducer from "./orgEmployeeDashboardReducer";
import subscriberDashboardReducer from "./subscriberDashboardReducer";
import groupDashboardReducer from "./groupDashboardReducer";
import notificationDashboardReducer from "./notificationDashboardReducer";



const OrgAdminDashboardReducer = combineReducers({
  routing: routerReducer,
  orgEmployeeDashboardReducer :orgEmployeeDashboardReducer,
  subscriberDashboardReducer : subscriberDashboardReducer,
  groupDashboardReducer : groupDashboardReducer,
  notificationDashboardReducer : notificationDashboardReducer,
  });

export default OrgAdminDashboardReducer;