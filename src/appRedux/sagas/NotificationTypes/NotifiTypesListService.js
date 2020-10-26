import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	NOTIFI_TYPES_LIST 
} from "../../../constants/ActionTypes";

import { NotifiTypesListServiceSuccess } from "../../actions/NotificationTypes";
import { NotifiTypesListService } from '../../api/NotificationTypes';
import {fetchStart, fetchSuccess} from "../../actions";

//   Worker Saga

function* NotifiTypesListServiceFunction({state}) {
    try {
        yield put(fetchStart());
        const NotifiTypesListServiceeData = yield call(NotifiTypesListService, state);
        if (NotifiTypesListServiceeData) {
            yield put(NotifiTypesListServiceSuccess(NotifiTypesListServiceeData.data));
        } else {
        }
        yield put(fetchSuccess());
    } catch (error) {
    }
}

//   Watcher Saga

export function* NotifiTypesListServiceRootSaga() {
	yield takeEvery(NOTIFI_TYPES_LIST, NotifiTypesListServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(NotifiTypesListServiceRootSaga),
        ]
    );
}
