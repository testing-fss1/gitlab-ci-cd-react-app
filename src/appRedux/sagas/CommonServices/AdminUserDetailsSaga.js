import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	ADMIN_USER_DETAILS_GET 
} from "../../../constants/ActionTypes";

import { adminUserDetailsGetSuccess } from "../../actions/CommonServices/AdminUserDetailsGet";
import { adminUserDetailsRequest } from '../../api/CommonServices/AdminUserDetailsApi';

//   Worker Saga

function* AdminUserDetailsServiceData({values}) {
    try {
        const AdminUserDetailsGetData = yield call(adminUserDetailsRequest, values);
        console.log("AdminUserDetailsGetData : ", AdminUserDetailsGetData)
        if (AdminUserDetailsGetData) {
            yield put(adminUserDetailsGetSuccess(AdminUserDetailsGetData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* AdminUserDetailsServiceRootSaga() {
	yield takeEvery(ADMIN_USER_DETAILS_GET, AdminUserDetailsServiceData);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AdminUserDetailsServiceRootSaga),
        ]
    );
}
