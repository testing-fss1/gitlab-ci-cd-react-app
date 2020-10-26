import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	NOTIFI_TYPES_STATUS_CHANGE 
} from "../../../constants/ActionTypes";

import { NotifiTypesListService } from "../../actions/NotificationTypes";
import { NotifiTypesStatusChange } from '../../api/NotificationTypes';
import {fetchStart, fetchSuccess} from "../../actions";

//   Worker Saga

function* NotifiTypesStatusChangeFunction({value, ornt_id, state}) {
    try {
        yield put(fetchStart());
        const NotifiTypesStatusChangeData = yield call(NotifiTypesStatusChange, value, ornt_id);
        if (NotifiTypesStatusChangeData) {
            yield put(NotifiTypesListService(state));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* NotifiTypesStatusChangeRootSaga() {
	yield takeEvery(NOTIFI_TYPES_STATUS_CHANGE, NotifiTypesStatusChangeFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(NotifiTypesStatusChangeRootSaga),
        ]
    );
}
