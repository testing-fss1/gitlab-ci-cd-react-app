import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  EDIT_ORGADMIN_USERS,
} from "constants/ActionTypes";
import {editOrgAdminUsersSuccess} from "../../actions/SiteAdmin/EditOrgAdminAction";
import {orgAdminEditRequest} from "../../api/SiteAdmin/editOrgAdminApi";
import {fetchStart, fetchSuccess} from "../../actions";

function* EditOrgAdminGetData({values, sm_memb_id, org_id}) {
	console.log('Edit data in sagas : ', values, sm_memb_id);
	const {salutation,firstname,middlename,lastname,organization_name,mobile_number,mobile_country_code,phone_number,phone_country_code,email_id,billing_address_line1,billing_address_line2,billing_address_city,billing_address_state,billing_address_country,billing_address_zipcode} = values;
	try {
		yield put(fetchStart());
	    const EditOrgAdminsData = yield call(orgAdminEditRequest, salutation,firstname,middlename,lastname,organization_name,mobile_number,mobile_country_code,phone_number,phone_country_code,email_id,billing_address_line1,billing_address_line2,billing_address_city,billing_address_state,billing_address_country,billing_address_zipcode,sm_memb_id, org_id);
	    if (EditOrgAdminsData) {	    	
			yield put(editOrgAdminUsersSuccess(EditOrgAdminsData.data));
			yield put(fetchSuccess());
	    } else {
        }
    } catch (error) {
	}
}

export function* EditOrgAdminRootSaga() {
    yield takeEvery(EDIT_ORGADMIN_USERS, EditOrgAdminGetData);
}

export default function* rootSaga() {
	yield all([
		fork(EditOrgAdminRootSaga)
	]);
}