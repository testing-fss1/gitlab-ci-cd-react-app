import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    GROUP_DASHBOARD_LIST_ACTION
} from "../../../../constants/ActionTypes";
import { groupDashboardSuccess, groupDashboardError } from "../../../actions/Dashboards/OrgAdminDashboardAction/GroupDashboardAction";
import { groupDashboardListService } from '../../../api/Dashboards/OrgAdminDashboardApi/GroupDashboardApi';



//   Worker Saga
function* groupDashboard({values}) {
    try {
        const groupDashboardList = yield call(groupDashboardListService,values);
        if (groupDashboardList.data.status=='organisation-groups-list-successfully-fetched') {
            yield put(groupDashboardSuccess(groupDashboardList));
        } else {
            yield put(groupDashboardError(groupDashboardList));
        }
    } 
    catch (error) {
        return error ;
    }
}



//   Watcher Saga
export function* groupDashboardListAction() {
    yield takeEvery(GROUP_DASHBOARD_LIST_ACTION
   , groupDashboard);
}

export default function* rootSaga() {
    yield all(
        [
            fork(groupDashboardListAction),
        ]
    );
}
