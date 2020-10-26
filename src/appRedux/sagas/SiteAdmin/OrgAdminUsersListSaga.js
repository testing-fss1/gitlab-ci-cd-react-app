import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    ORG_ADMIN_USERS_LIST
} from "../../../constants/ActionTypes";
import { OrgAdminUsersListSuccess } from "../../actions/SiteAdmin/OrgAdminUsersList";
import { orgAdminUsersListRequest } from '../../api/SiteAdmin/OrgAdminUsersListApi';
import {fetchStart, fetchSuccess} from "../../actions";


//   Worker Saga
function* orgAdminUsersListGetData({values}) {
    const { number_of_records, page_number } = values ;
    try {
        yield put(fetchStart());
       const orgAdminUsersList = yield call(orgAdminUsersListRequest, number_of_records, page_number);
       if (orgAdminUsersList.data.status=='admin-users-list-received') {
            yield put(OrgAdminUsersListSuccess(orgAdminUsersList));
            yield put(fetchSuccess());
        } else {
		}
	} catch (error) {
	}
}



//   Watcher Saga
export function* orgAdminUsersListRootSaga() {
    yield takeEvery(ORG_ADMIN_USERS_LIST
   , orgAdminUsersListGetData);
}

export default function* rootSaga() {
    yield all(
        [
            fork(orgAdminUsersListRootSaga),
        ]
    );
}
