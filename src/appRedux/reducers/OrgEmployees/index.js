import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import OrgEmpListService from "./OrgEmpListService";
import ChangeEmailRequestAddService from "./ChangeEmailRequestAddService";
import AddOrgEmployeesService from "./AddOrgEmployeesService";
import UniqueCodeVerifyService from "./UniqueCodeVerifyService";

const OrgEmployees = combineReducers({
  routing: routerReducer,
  OrgEmpListServiceReducer: OrgEmpListService,
  ChangeEmailRequestAddServiceReducer: ChangeEmailRequestAddService,
  AddOrgEmployeesServiceReducer: AddOrgEmployeesService,
  UniqueCodeVerifyServiceReducer: UniqueCodeVerifyService,
});

export default OrgEmployees;
