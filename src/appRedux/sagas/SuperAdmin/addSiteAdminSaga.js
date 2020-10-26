import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  ADD_SITEADMIN_USERS,
} from "constants/ActionTypes";
import {addSiteAdminUsersSuccess} from "../../actions/SuperAdmin/addSiteAdminAction";
import {siteAdminAddRequest} from "../../api/SuperAdmin/addSiteAdminApi";

function* AddSiteAdminGetData({values}) {
	const {salutation, firstname, middlename, lastname, email_id} = values;
	try {
	    const SiteAdminsData = yield call(siteAdminAddRequest, salutation, firstname, middlename, lastname, email_id);
	    if (SiteAdminsData) {	    	
	        yield put(addSiteAdminUsersSuccess(SiteAdminsData.data));
	    } else {
        }
    } catch (error) {
	}
}

export function* AddSiteAdminRootSaga() {
    yield takeEvery(ADD_SITEADMIN_USERS, AddSiteAdminGetData);
}

export default function* rootSaga() {
	yield all([
		fork(AddSiteAdminRootSaga)
	]);
}