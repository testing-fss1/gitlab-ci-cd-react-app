import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    NOTIFICATION_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { notificationDashboardSuccess, notificationDashboardError } from "../../../actions/Dashboards/OrgAdminDashboardAction/NotificationDashboardAction";
import { notificationDashboardService } from '../../../api/Dashboards/OrgAdminDashboardApi/NotificationDashboardApi';



//   Worker Saga
function* notificationDashboard({values}) {
    try {
        const notificationDashboardList = yield call(notificationDashboardService,values);
        if (notificationDashboardList.data.status=='org-rel-notification-types-info-list-successfully-fetched') {
            yield put(notificationDashboardSuccess(notificationDashboardList));
        } else {
            yield put(notificationDashboardError(notificationDashboardList));
        }
    } 
    catch (error) {
        return error
    }
}



//   Watcher Saga
export function* notificationDashboardListAction() {
    yield takeEvery(NOTIFICATION_DASHBOARD_LIST_ACTION
   , notificationDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(notificationDashboardListAction),
        ]
    );
}
