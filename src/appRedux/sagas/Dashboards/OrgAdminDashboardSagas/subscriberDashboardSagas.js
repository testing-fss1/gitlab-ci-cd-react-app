import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    SUBSCRIBERS_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { subscriberDashboardSuccess, subscriberDashboardError } from "../../../actions/Dashboards/OrgAdminDashboardAction/SubscriberDashboardAction";
import { subscriberDashboardListService } from '../../../api/Dashboards/OrgAdminDashboardApi/SubscriberDashboardApi';



//   Worker Saga
function* subscriberDashboard({values}) {
    try {
        const subscriberDashboardList = yield call(subscriberDashboardListService,values);
        if (subscriberDashboardList.data.status=='admin-users-list-received') {
            yield put(subscriberDashboardSuccess(subscriberDashboardList));
        } else {
            yield put(subscriberDashboardError(subscriberDashboardList));
        }
    } 
    catch (error) {
       return error
    }
}


//   Watcher Saga
export function* subscriberDashboardListAction() {
    yield takeEvery(SUBSCRIBERS_DASHBOARD_LIST_ACTION
   , subscriberDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(subscriberDashboardListAction),
        ]
    );
}
