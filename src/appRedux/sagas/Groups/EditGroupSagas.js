import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    EDIT_GROUP,
} from "constants/ActionTypes";
import {GroupsListService} from "../../actions/Groups";
import {GroupEdit} from "../../api/Groups";
import {fetchStart, fetchSuccess} from "../../actions";



function* EditGroupService({data,orng_id,allowance_status,page_number,number_of_records}) {
    const {notification_group_name,notification_group_description,notification_group_type,notification_type_name,notification_group_subscriber_allowance_status}= data;
    try {
        yield put(fetchStart());
        const GroupEditData = yield call(GroupEdit,notification_group_name,notification_group_description,notification_group_type,notification_type_name,notification_group_subscriber_allowance_status,orng_id,allowance_status);
        console.log("GroupEditData",GroupEditData)
	    if (GroupEditData.status==="organisation-groups-updated-successfully") {
	      yield put(GroupsListService(page_number,number_of_records));
	    }else {
          yield put(GroupsListService(page_number,number_of_records));
        }
    } catch (error) {
	}
}

//   Watcher Saga

export function* EditGroupRootSaga() {
	yield takeEvery(EDIT_GROUP, EditGroupService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(EditGroupRootSaga),
        ]
    );
}
