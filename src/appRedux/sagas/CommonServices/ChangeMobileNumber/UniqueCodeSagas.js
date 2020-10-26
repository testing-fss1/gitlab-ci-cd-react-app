import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	UNIQUE_MOBILE_CODE_VERIFICATION 
} from "../../../../constants/ActionTypes";

import { UniqueMobileCodeVerifyServiceSuccess } from "../../../actions";
import { UniqueMobileCodeVerifyServiceApi } from '../../../api';

//   Worker Saga

function* UniqueMobileCodeVerifyServiceFunction({values, sm_memb_id, column_name}) {
    console.log("venkatesh")
    const {unique_code_verification} = values;
    try {
        const UniqueMobileCodeVerifyServiceData = yield call(UniqueMobileCodeVerifyServiceApi, unique_code_verification, sm_memb_id, column_name);
        if (UniqueMobileCodeVerifyServiceData) {
            yield put(UniqueMobileCodeVerifyServiceSuccess(UniqueMobileCodeVerifyServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* UniqueMobileCodeVerifyServiceRootSaga() {
	yield takeEvery(UNIQUE_MOBILE_CODE_VERIFICATION, UniqueMobileCodeVerifyServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(UniqueMobileCodeVerifyServiceRootSaga),
        ]
    );
}
