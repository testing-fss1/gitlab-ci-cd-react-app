import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    SUBSCRIBERS_LIST_SERVICE,
} from "constants/ActionTypes";
import {SubscribersListServiceSucess} from "../../actions/Subscribers";
import {SubscribersListServiceApi} from "../../api/Subscribers";
import {UserStatusChangeSuccess} from "../../actions/CommonServices";
import {fetchStart, fetchSuccess} from "../../actions";


function* SubscribersListServiceSaga({page_number,number_of_records}) {
    try {
        yield put(fetchStart());
        const SubscribersListServiceData = yield call(SubscribersListServiceApi,page_number,number_of_records)
        console.log('SubscriberListservicesagas',SubscribersListServiceData)
	    if (SubscribersListServiceData.status== "subscribers-info-list-successfully-fetched") {
          yield put(SubscribersListServiceSucess(SubscribersListServiceData.data));
          yield put(UserStatusChangeSuccess({}))
	    }else {
          yield put(SubscribersListServiceSucess(SubscribersListServiceData.data));
          yield put(UserStatusChangeSuccess({}))
        }
        yield put(fetchSuccess());
    } catch (error) {
	}
}

//   Watcher Saga

export function* SubscribersListServiceRootSaga() {
	yield takeEvery(SUBSCRIBERS_LIST_SERVICE, SubscribersListServiceSaga);
}


export default function* rootSaga() {
    yield all(
        [
            fork(SubscribersListServiceRootSaga),
        ]
    );
}
