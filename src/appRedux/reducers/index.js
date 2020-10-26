import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import Settings from "./Settings";
import Auth from "./Auth";
import Common from "./Common";
import ChangePasswordReducer from "./Password";
import SubscribersReducer from "./Subscribers";
import OrgEmployees from "./OrgEmployees";
import NotificationTypes from "./NotificationTypes";
import SiteAdminReducer from "./SiteAdmin";
import GroupsReducer from "./Groups"
import CommonServices from "./CommonServices";
import DashboardReducer from "./Dashboards"
import NotificationIconReducers from "./NotificationReducer";
import ComposeHistoryReducer from "./ComposeHistoryReducer";
import ComposeReducer from "./ComposeReducer"
import AddOrgAdmin from "./AddOrgAdmin";

export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  commonData: Common,
  ChangePasswordReducer : ChangePasswordReducer,
  SubscribersReducer:SubscribersReducer,
  OrgEmployees: OrgEmployees,
  NotificationTypes: NotificationTypes,
  SiteAdminReducer : SiteAdminReducer,
  GroupsReducer:GroupsReducer,
  CommonServices: CommonServices,
  DashboardReducer :DashboardReducer,
  NotificationIconReducers : NotificationIconReducers,
  ComposeHistoryReducer : ComposeHistoryReducer,
  AddOrgAdmin: AddOrgAdmin,
  ComposeReducer : ComposeReducer,
});
