import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	USER_STATUS_CHANGE,
    CHANGE_SUBSCRIBER_GET_REQUEST
} from "../../../constants/ActionTypes";

import { UserStatusChangeSuccess,changeSubscriberSuccess } from "../../actions/CommonServices";
import { UserStatusChange,SubscriberStatus } from '../../api/CommonServices';
import {fetchStart, fetchSuccess} from "../../actions";
import {SubscriberSingleViewListService,GroupsListService} from "../../actions";

//   Worker Saga

function* UserStatusChangeFunction({value, sm_memb_id}) {
    try {
        yield put(fetchStart());
        const UserStatusChangeData = yield call(UserStatusChange, value, sm_memb_id);
        if (UserStatusChangeData) {
            yield put(UserStatusChangeSuccess(UserStatusChangeData.data));
           yield put(fetchSuccess());
        } else {
        }
    } catch (error) {
    }
}



function* SubscriberStatusChangeMainSaga({data,orng_id,sm_memb_id,org_id}) {
    console.log("SubscriberStatusChangeMainSaga", data,orng_id)
    try {
        yield put(fetchStart());
        const SubscriberStatusChangeData = yield call(SubscriberStatus, data,orng_id,sm_memb_id);
        if (SubscriberStatusChangeData) {
            yield put(changeSubscriberSuccess(SubscriberStatusChangeData.data));
            yield put(SubscriberSingleViewListService(org_id,sm_memb_id))
            yield put(fetchSuccess());
            yield put(GroupsListService())
        } else {
        }
    } catch (error) {
    }
}



//   Watcher Saga

export function* UserStatusChangeRootSaga() {
	yield takeEvery(USER_STATUS_CHANGE, UserStatusChangeFunction);
}

export function* SubscriberStatusChangeRootSaga(){
    yield takeEvery(CHANGE_SUBSCRIBER_GET_REQUEST, SubscriberStatusChangeMainSaga);

}


export default function* rootSaga() {
    yield all(
        [
            fork(UserStatusChangeRootSaga),
             fork(SubscriberStatusChangeRootSaga),
        ]
    );
}
