import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    GROUP_DATA_GET_SERVICE,
} from "constants/ActionTypes";
import {GroupDataGetServiceSucess} from "../../actions/Groups";
import {GroupDataGetServiceApi} from "../../api/Groups";
import {fetchStart, fetchSuccess} from "../../actions";


function* GroupDataGetService({orng_id}) {
    console.log("***sagas",orng_id)
    try {
        yield put(fetchStart());
        const GroupGetData = yield call(GroupDataGetServiceApi,orng_id);
        console.log("GroupGetData",GroupGetData.data)
	    if (GroupGetData.status==="organisation-groups-details-fetched-suuceesfully") {
	      yield put(GroupDataGetServiceSucess(GroupGetData.data));
	    }else {
          yield put(GroupDataGetServiceSucess(GroupGetData.data));
        }
        yield put(fetchSuccess());
    } catch (error) {
	}
}

//   Watcher Saga

export function* GroupDataGetServiceRootSaga() {
	yield takeEvery(GROUP_DATA_GET_SERVICE, GroupDataGetService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(GroupDataGetServiceRootSaga),
        ]
    );
}
