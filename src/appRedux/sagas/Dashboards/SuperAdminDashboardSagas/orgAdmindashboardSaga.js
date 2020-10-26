import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    ORG_ADMIN_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { orgAdminDashboardSuccess, orgAdminDashboardError } from "../../../actions/Dashboards/SuperAdminDashboardAction/OrgAdminDashboardAction";
import { orgAdminDashboardListService } from '../../../api/Dashboards/SuperAdminDashboardApi/orgAdmindashboardApi';



//   Worker Saga
function* orgAdminDashboard({values}) {
    console.log("value",values)
    try {
       const orgAdminDashboardList = yield call(orgAdminDashboardListService,values);
       if (orgAdminDashboardList.data.status=='admin-users-list-received') {
            yield put(orgAdminDashboardSuccess(orgAdminDashboardList));
        } else {
            yield put(orgAdminDashboardError(orgAdminDashboardList));
        }
    } 
    catch (error) {
       return error
    }
}



//   Watcher Saga
export function* orgAdminDashboardListAction() {
    yield takeEvery(ORG_ADMIN_DASHBOARD_LIST_ACTION
   , orgAdminDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(orgAdminDashboardListAction),
        ]
    );
}
