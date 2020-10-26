import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  EDIT_SITEADMIN_USERS,
} from "constants/ActionTypes";
import {editSiteAdminUsersSuccess} from "../../actions/SuperAdmin/editSiteAdminAction";
import {siteAdminEditRequest} from "../../api/SuperAdmin/editSiteAdminApi";

function* EditSiteAdminGetData({values, sm_memb_id}) {
	console.log('Edit site admin sagas : ', values);
	const {salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number, phone_country_code, email_id} = values;
	try {
	    const EditSiteAdminsData = yield call(siteAdminEditRequest, salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number, phone_country_code, email_id, sm_memb_id);
	    if (EditSiteAdminsData) {	    	
	        yield put(editSiteAdminUsersSuccess(EditSiteAdminsData.data));
	    } else {
        }
    } catch (error) {
	}
}

export function* EditSiteAdminRootSaga() {
    yield takeEvery(EDIT_SITEADMIN_USERS, EditSiteAdminGetData);
}

export default function* rootSaga() {
	yield all([
		fork(EditSiteAdminRootSaga)
	]);
}