import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    SITE_ADMIN_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { siteAdminDashboardSuccess, siteAdminDashboardError } from "../../../actions/Dashboards/SuperAdminDashboardAction/SiteAdminDashboardAction";
import { siteAdminDashboardListService } from '../../../api/Dashboards/SuperAdminDashboardApi/siteAdmindashboardApi';


//   Worker Saga
function* siteAdminDashboard({values}) {
    console.log("checjii",values)
    try {
       const siteAdminDashboardList = yield call(siteAdminDashboardListService,values);
         if (siteAdminDashboardList.data.status=='admin-users-list-received') {
            yield put(siteAdminDashboardSuccess(siteAdminDashboardList));
        } else {
            yield put(siteAdminDashboardError(siteAdminDashboardList));
        }
    } 
    catch (error) {
       return error
    }
}


//   Watcher Saga
export function* siteAdminDashboardListAction() {
    yield takeEvery(SITE_ADMIN_DASHBOARD_LIST_ACTION
   , siteAdminDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(siteAdminDashboardListAction),
        ]
    );
}
