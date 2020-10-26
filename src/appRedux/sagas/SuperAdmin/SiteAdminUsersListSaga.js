import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    SITE_ADMIN_USERS_LIST
} from "../../../constants/ActionTypes";
import { SiteAdminUsersListSuccess } from "../../actions/SuperAdmin/SiteAdminUsersList";
import { siteAdminUsersListRequest } from '../../api/SuperAdmin/SiteAdminUsersListApi';


//   Worker Saga
function* siteAdminUsersListGetData({values}) {
    const { number_of_records, page_number } = values ;
    try {
       const siteAdminUsersList = yield call(siteAdminUsersListRequest, number_of_records, page_number);
         if (siteAdminUsersList.data.status=='admin-users-list-received') {
            yield put(SiteAdminUsersListSuccess(siteAdminUsersList));
        }
    } 
    catch (error) {
       return error
    }
}


//   Watcher Saga
export function* siteAdminUsersListRootSaga() {
    yield takeEvery(SITE_ADMIN_USERS_LIST
   , siteAdminUsersListGetData);
}

export default function* rootSaga() {
    yield all(
        [
            fork(siteAdminUsersListRootSaga),
        ]
    );
}
