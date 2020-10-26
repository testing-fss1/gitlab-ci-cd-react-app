import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    GROUP_STATUS_CHANGE,
} from "constants/ActionTypes";
import {GroupsListService} from "../../actions/Groups";
import {ChangeGroupStatusApi} from "../../api/Groups";
import {fetchStart, fetchSuccess} from "../../actions";


function* GroupStatusChangeService({data,orng_id,page_number,number_of_records}) {
    const is_active_status= data;
    console.log('GroupStatusChangeService',is_active_status)
    try {
        yield put(fetchStart());
        const ChangeGroupStatus = yield call(ChangeGroupStatusApi,orng_id,is_active_status);
        console.log("ChangeGroupStatus",ChangeGroupStatus)
	    if (ChangeGroupStatus.status==="organisation-groups-change-successfully") {
	      yield put(GroupsListService(page_number,number_of_records));
	    }else {
          yield put(GroupsListService(page_number,number_of_records));
        }
    } catch (error) {
	}
}

//   Watcher Saga

export function* AddGroupRootSaga() {
	yield takeEvery(GROUP_STATUS_CHANGE, GroupStatusChangeService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AddGroupRootSaga),
        ]
    );
}
