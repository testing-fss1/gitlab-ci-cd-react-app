import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import orgAdmindashboardReducer from "./orgAdmindashboardReducer";
import orgEmployeedashboardReducer from "./orgEmployeedashboardReducer";
import siteAdmindashboardReducer from "./siteAdmindashboardReducer";



const SuperAdminDashboardReducer = combineReducers({
  routing: routerReducer,
  orgAdmindashboardReducer :orgAdmindashboardReducer,
  orgEmployeedashboardReducer : orgEmployeedashboardReducer,
  siteAdmindashboardReducer : siteAdmindashboardReducer,

  });

export default SuperAdminDashboardReducer;