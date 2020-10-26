import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    GROUP_MAPPED_ADD_SERVICE,
} from "constants/ActionTypes";
import {GroupMappedAddServiceSuccess, GroupsListServices} from "../../actions/Subscribers";
import {GroupMappedAddServiceApi} from "../../api/Subscribers";
import {fetchStart, fetchSuccess} from "../../actions";



function* GroupMappedAddService({data}) {
	console.log("Sagasdata:",data)
	const {checkedItems, number_of_records, page_number, sm_memb_id} = data;
	try {
		yield put(fetchStart());
		const GroupMappedAddServiceData = yield call( GroupMappedAddServiceApi, checkedItems, sm_memb_id);
		if (GroupMappedAddServiceData) {
			console.log("GroupMappedAddServiceData:",GroupMappedAddServiceData)
			yield put(GroupMappedAddServiceSuccess(GroupMappedAddServiceData.data));
			yield put(GroupsListServices({number_of_records, page_number, sm_memb_id}));
			yield put(fetchSuccess());
		} else {
		}
	} catch (error) {
	}
}

export function* GroupMappedAddServiceRootSaga() {
	yield takeEvery(GROUP_MAPPED_ADD_SERVICE, GroupMappedAddService);
}

export default function* rootSaga() {
	yield all([
		fork(GroupMappedAddServiceRootSaga)
	]);
}