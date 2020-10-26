import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	ORG_ADMIN_DETAILS_GET 
} from "../../../constants/ActionTypes";

import { orgAdminDetailsGetSuccess } from "../../actions/SiteAdmin/OrgAdminDetailsGet";
import { orgAdminUserDetailsRequest } from '../../api/SiteAdmin/OrgAdminDetailsGetApi';

//   Worker Saga

function* OrgAdminUserDetailsServiceData({values}) {
    try {
        const OrgAdminUserDetailsGetData = yield call(orgAdminUserDetailsRequest, values);
        console.log("OrgAdminUserDetailsGetData : ", OrgAdminUserDetailsGetData)
        if (OrgAdminUserDetailsGetData) {
            yield put(orgAdminDetailsGetSuccess(OrgAdminUserDetailsGetData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* OrgAdminUserDetailsServiceRootSaga() {
	yield takeEvery(ORG_ADMIN_DETAILS_GET, OrgAdminUserDetailsServiceData);
}


export default function* rootSaga() {
    yield all(
        [
            fork(OrgAdminUserDetailsServiceRootSaga),
        ]
    );
}
