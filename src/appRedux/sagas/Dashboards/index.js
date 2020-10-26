import {all} from "redux-saga/effects";
import OrgAdminDashboardSagas from "./OrgAdminDashboardSagas";
import SuperAdminDashboardSagas from "./SuperAdminDashboardSagas" ;

export default function* rootSaga() {
  yield all([  	
     	OrgAdminDashboardSagas(),
        SuperAdminDashboardSagas(),
  ]);
}
