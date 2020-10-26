import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { orgEmployeeDashboardSuccess, orgEmployeeDashboardError } from "../../../actions/Dashboards/OrgAdminDashboardAction/OrgEmployeesDashboardAction";
import { orgEmployeeDashboardService } from '../../../api/Dashboards/OrgAdminDashboardApi/OrgEmployeeDashboardApi';



//   Worker Saga
function* orgEmployeeDashboard({values}) {
    console.log("eyes",values);
    try {
        const orgEmployeeDashboardList = yield call(orgEmployeeDashboardService,values);
       if (orgEmployeeDashboardList.data.status=='admin-users-list-received') {
            yield put(orgEmployeeDashboardSuccess(orgEmployeeDashboardList));
        } else {
            yield put(orgEmployeeDashboardError(orgEmployeeDashboardList));
        }
    } 
    catch (error) {
       return error 
    }
}



//   Watcher Saga
export function* orgEmployeeDashboardListAction() {
    yield takeEvery(ORG_SCOPE_EMPLOYEE_DASHBOARD_LIST_ACTION
   , orgEmployeeDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(orgEmployeeDashboardListAction),
        ]
    );
}
