import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	EDIT_NOTIFI_TYPES 
} from "../../../constants/ActionTypes";

import { NotifiTypesListService,EditNotifiTypesSuccess } from "../../actions/NotificationTypes";
import { EditNotifiTypesService } from '../../api/NotificationTypes';
import {fetchStart} from "../../actions";

//   Worker Saga

function* EditNotifiTypesServiceFunction({values, ornt_id, NotifiTypesListState}) {
    const {notificationtypename, notificationtypedescription, notificationtypecolorcode} = values;
    try {
        yield put(fetchStart());
        const EditNotifiTypesServiceData = yield call(EditNotifiTypesService, notificationtypename, notificationtypedescription, notificationtypecolorcode, ornt_id);
        if (EditNotifiTypesServiceData.data.status == "org-rel-notification-types-info-updated-successfully.") {
            yield put(NotifiTypesListService(NotifiTypesListState));
            yield put(EditNotifiTypesSuccess(EditNotifiTypesServiceData))
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* EditNotifiTypesServiceRootSaga() {
	yield takeEvery(EDIT_NOTIFI_TYPES, EditNotifiTypesServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(EditNotifiTypesServiceRootSaga),
        ]
    );
}
