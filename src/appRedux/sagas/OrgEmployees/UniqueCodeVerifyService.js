import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	UNIQUE_CODE_VERIFICATION 
} from "../../../constants/ActionTypes";

import { UniqueCodeVerifyServiceSuccess } from "../../actions/OrgEmployees";
import { UniqueCodeVerifyService } from '../../api/OrgEmployees';

//   Worker Saga

function* UniqueCodeVerifyServiceFunction({values, sm_memb_id, column_name}) {
    console.log("venkatesh")
    const {unique_code_verification} = values;
    try {
        const UniqueCodeVerifyServiceData = yield call(UniqueCodeVerifyService, unique_code_verification, sm_memb_id, column_name);
        if (UniqueCodeVerifyServiceData) {
            yield put(UniqueCodeVerifyServiceSuccess(UniqueCodeVerifyServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* UniqueCodeVerifyServiceRootSaga() {
	yield takeEvery(UNIQUE_CODE_VERIFICATION, UniqueCodeVerifyServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(UniqueCodeVerifyServiceRootSaga),
        ]
    );
}
