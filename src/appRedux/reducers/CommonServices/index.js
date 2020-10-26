import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import CountriesPhoneCodesListService from "./CountriesPhoneCodesListService";
import ResendEmail from "./ResendEmail";
import ResetPassword from "./ResetPassword";
import UserStatusChange from "./UserStatusChange";
import CountryListServiceReducer from "./CountryListServiceReducer";
import SubscribeListReducers from "./SubscribeListReducers";
import AdminUserDetailsGetReducer from "./AdminUserDetailsGetReducer";
import ChangeMobileNumber from "./ChangeMobileNumber";

const NotificationTypes = combineReducers({
  routing: routerReducer,
  CountriesPhoneCodesListServiceReducer: CountriesPhoneCodesListService,
  ResendEmail: ResendEmail,
  ResetPassword: ResetPassword,
  UserStatusChangeReducer: UserStatusChange,
  CountryListServiceReducer: CountryListServiceReducer,
  SubscribeListReducers: SubscribeListReducers,
  AdminUserDetailsGetReducer: AdminUserDetailsGetReducer,
  ChangeMobileNumber : ChangeMobileNumber
});

export default NotificationTypes;
