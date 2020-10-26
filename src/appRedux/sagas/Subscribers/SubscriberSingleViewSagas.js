import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    SUBSCRIBE_SINGLE_VIEW_LIST,ADMIN_USER_DETAILS_GET
} from "constants/ActionTypes";
import {SubscriberSingleViewListServiceSuccess,AdminUserDetailsGetServiceSuccess} from "../../actions/Subscribers";
import {SubscriberSingleViewServiceApi,AdminUserDetailsServiceApi} from "../../api/Subscribers";




function* SubscriberSingleViewService({org_id,sm_memb_id,page_number}) {
	try {
        const SubscriberSingleViewData = yield call(SubscriberSingleViewServiceApi, org_id, sm_memb_id,page_number);
       // console.log("vgff",SubscriberSingleViewData.data.status);
		if (SubscriberSingleViewData.data.status =="organisation-groups-list-successfully-fetched") {
			yield put(SubscriberSingleViewListServiceSuccess(SubscriberSingleViewData.data));
		} else {
            console.log(SubscriberSingleViewData.data.status)
		}
	} catch (error) {
	}
}


function* adminUserDetailsService({org_id,sm_memb_id}) {
	try {
        console.log("in sagas of adminUserDetailsService")
         const AdminUserDetailsData = yield call(AdminUserDetailsServiceApi, org_id, sm_memb_id);
          console.log("kgf",AdminUserDetailsData.data.status);
		if (AdminUserDetailsData) {
			yield put(AdminUserDetailsGetServiceSuccess(AdminUserDetailsData.data));
		} else {
            console.log(AdminUserDetailsData.data.status)
		}
	} catch (error) {
	}
}

export function* SubscriberServiceRootSaga() {
	yield takeEvery(SUBSCRIBE_SINGLE_VIEW_LIST, SubscriberSingleViewService);
}

export function* AdminUserDetailsRootSaga() {
	yield takeEvery(ADMIN_USER_DETAILS_GET, adminUserDetailsService);
}



export default function* rootSaga() {
	yield all([
        fork(SubscriberServiceRootSaga),
        fork(AdminUserDetailsRootSaga),
	]);
}