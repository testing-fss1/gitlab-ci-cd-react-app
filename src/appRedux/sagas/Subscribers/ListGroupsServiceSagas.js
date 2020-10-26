import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    GROUPS_LIST,
} from "constants/ActionTypes";
import {GroupsListServicesSuccess} from "../../actions/Subscribers";
import {ListGroupsServiceApi} from "../../api/Subscribers";
import {fetchStart, fetchSuccess} from "../../actions";


function* ListGroupsService({data}) {
	const {number_of_records, page_number, sm_memb_id} = data;
	try {
		yield put(fetchStart());
		const ListGroupsServiceData = yield call(ListGroupsServiceApi, number_of_records, page_number, sm_memb_id);
		if (ListGroupsServiceData) {
			yield put(GroupsListServicesSuccess(ListGroupsServiceData.data));
			yield put(fetchSuccess());
		} else {
		}
	} catch (error) {
	}
}

export function* ListGroupsServiceRootSaga() {
	yield takeEvery(GROUPS_LIST, ListGroupsService);
}

export default function* rootSaga() {
	yield all([
		fork(ListGroupsServiceRootSaga)
	]);
}