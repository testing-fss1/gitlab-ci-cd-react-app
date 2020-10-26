import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ChangePassword from "./changePassword";
import ActivationCheck from "./ActivationCheck";

const PasswordReducers = combineReducers({
  routing: routerReducer,
  ChangePassword: ChangePassword,
  ActivationCheck: ActivationCheck,
});

export default PasswordReducers;
