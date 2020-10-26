import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  ADD_ORGADMIN_USERS,
} from "constants/ActionTypes";
import {addOrgAdminUsersSuccess} from "../../actions/SiteAdmin/AddOrgAdminAction";
import {orgAdminAddRequest} from "../../api/SiteAdmin/addOrgAdminApi";

function* AddOrgAdminGetData({values}) {
	const {salutation, firstname, middlename, lastname, organization_name, mobile_number, mobile_country_code, phone_number, phone_country_code, email_id, billing_address_line1, billing_address_line2, billing_address_city, billing_address_state, billing_address_country, billing_address_zipcode} = values;
	try {
	    const OrgAdminsData = yield call(orgAdminAddRequest, salutation, firstname, middlename, lastname, organization_name, mobile_number, mobile_country_code, phone_number, phone_country_code, email_id, billing_address_line1, billing_address_line2, billing_address_city, billing_address_state, billing_address_country, billing_address_zipcode);
	    if (OrgAdminsData) {	    	
	        yield put(addOrgAdminUsersSuccess(OrgAdminsData.data));
	    } else {
        }
    } catch (error) {
	}
}

export function* AddOrgAdminRootSaga() {
    yield takeEvery(ADD_ORGADMIN_USERS, AddOrgAdminGetData);
}

export default function* rootSaga() {
	yield all([
		fork(AddOrgAdminRootSaga)
	]);
}