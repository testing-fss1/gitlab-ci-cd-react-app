import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    GROUP_LIST_SERVICE,
} from "constants/ActionTypes";
import {GroupsListServiceSucess} from "../../actions/Groups";
import {GroupsListServiceApi} from "../../api/Groups";
import {fetchStart, fetchSuccess} from "../../actions";


function* GroupListService({page_number,number_of_records}) {
    try {
        yield put(fetchStart());
        const GroupsListsData = yield call(GroupsListServiceApi,page_number,number_of_records);
        console.log("GroupsListServiceSagas",GroupsListsData)
	    if (GroupsListsData.status==="organisation-groups-list-successfully-fetched") {
	      yield put(GroupsListServiceSucess(GroupsListsData.data));
	    }else {
          yield put(GroupsListServiceSucess(GroupsListsData.data));
        }
        yield put(fetchSuccess());
    } catch (error) {
	}
}

//   Watcher Saga

export function* GroupListServiceRootSaga() {
	yield takeEvery(GROUP_LIST_SERVICE, GroupListService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(GroupListServiceRootSaga),
        ]
    );
}
