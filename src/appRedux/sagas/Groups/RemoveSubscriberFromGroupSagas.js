import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    REMOVE_SUBSCRIBER_FROM_GROUP,
} from "constants/ActionTypes";
import {RemoveSubscriberFromGroupServiceSuccess} from "../../actions/Groups";
import {RemoveSubsciberFromGroupServiceApi} from "../../api/Groups";
import {fetchStart, fetchSuccess} from "../../actions";


function* RemoveSubsciberFromGroupService({data,orng_id}) {
    try {
        const RemoveSubsciberFromGroupServiceData = yield call(RemoveSubsciberFromGroupServiceApi,data,orng_id);
        console.log("RemoveSubsciberFromGroupServiceDataSagas",RemoveSubsciberFromGroupServiceData)
	    if (RemoveSubsciberFromGroupServiceData.status==="subscribers-removed") {
	      yield put(RemoveSubscriberFromGroupServiceSuccess(RemoveSubsciberFromGroupServiceData.data));
	    }else {
          yield put(RemoveSubscriberFromGroupServiceSuccess(RemoveSubsciberFromGroupServiceData.data));
        }
    } catch (error) {
	}
}

//   Watcher Saga

export function* RemoveSubsciberFromGroupServiceRootSaga() {
	yield takeEvery(REMOVE_SUBSCRIBER_FROM_GROUP, RemoveSubsciberFromGroupService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(RemoveSubsciberFromGroupServiceRootSaga),
        ]
    );
}
