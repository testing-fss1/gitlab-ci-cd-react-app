import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    ADD_GROUP,
} from "constants/ActionTypes";
import {addGroupSucess} from "../../actions/Groups";
import {GroupAdd} from "../../api/Groups";


function* AddGroupService({data,allowance_status}) {
    console.log('allowance_status',allowance_status)
    const {notification_group_name,notification_group_description,notification_group_type,notification_type_name,notification_group_subscriber_allowance_status}= data;
    try {
        const GroupAddData = yield call(GroupAdd,notification_group_name,notification_group_description,notification_group_type,notification_group_subscriber_allowance_status,allowance_status,notification_type_name);
        console.log("Add group",GroupAddData)
	    if (GroupAddData.status==="organisation-related-groups-inserted-successfully") {
	      yield put(addGroupSucess(GroupAddData.data));
	    }else {
          yield put(addGroupSucess(GroupAddData.data));
        }
    } catch (error) {
	}
}

//   Watcher Saga

export function* AddGroupRootSaga() {
	yield takeEvery(ADD_GROUP, AddGroupService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AddGroupRootSaga),
        ]
    );
}
