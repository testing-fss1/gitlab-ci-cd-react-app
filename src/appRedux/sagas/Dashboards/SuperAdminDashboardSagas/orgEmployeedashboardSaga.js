import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    ORG_EMPLOYEE_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { orgEmployeeDashboardSuccess, orgEmployeeDashboardError } from "../../../actions/Dashboards/SuperAdminDashboardAction/OrgEmployeeDashboardAction";
import { orgEmployeeDashboardListService } from '../../../api/Dashboards/SuperAdminDashboardApi/orgEmployeedashboardApi';



//   Worker Saga
function* orgEmployeeDashboard({values}) {
    console.log("checkhsd",values);
    try {
        const orgEmployeeDashboardList = yield call(orgEmployeeDashboardListService,values);
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
    yield takeEvery(ORG_EMPLOYEE_DASHBOARD_LIST_ACTION
   , orgEmployeeDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(orgEmployeeDashboardListAction),
        ]
    );
}
