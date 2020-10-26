import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	CHANGE_EMAIL_REQUEST_ADD 
} from "../../../constants/ActionTypes";

import { ChangeEmailRequestAddServiceSuccess } from "../../actions/OrgEmployees";
import { ChangeEmailRequestAddService } from '../../api/OrgEmployees';

//   Worker Saga

function* ChangeEmailRequestAddServiceFunction({values, sm_memb_id}) {
    const {current_email_id, new_email_id} = values;
    try {
        const ChangeEmailRequestAddServiceData = yield call(ChangeEmailRequestAddService, current_email_id, new_email_id, sm_memb_id);
        if (ChangeEmailRequestAddServiceData) {
            yield put(ChangeEmailRequestAddServiceSuccess(ChangeEmailRequestAddServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* ChangeEmailRequestAddServiceRootSaga() {
	yield takeEvery(CHANGE_EMAIL_REQUEST_ADD, ChangeEmailRequestAddServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(ChangeEmailRequestAddServiceRootSaga),
        ]
    );
}
