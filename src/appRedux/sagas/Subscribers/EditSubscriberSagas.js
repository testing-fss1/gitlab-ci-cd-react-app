import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    EDIT_SUBSCRIBER,
} from "constants/ActionTypes";
import {SubscribersListService,EditSubscriberSucess} from "../../actions/Subscribers";
import {SubscriberEdit} from "../../api/Subscribers";
import {fetchStart, fetchSuccess} from "../../actions";


function* EditSubscriberService({data,sm_memb_id,page_number,number_of_records}) {
	console.log('EditSubscriberServicesagas',data)
    const {salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number,
        phone_country_code, email_id,address_ref_name,address_line1,address_line2,address_area,address_city,address_state,address_country,address_zipcode_pincode,orsa_id,org_id}= data;
    try {
        yield put(fetchStart());
        const SubscriberEditData = yield call(SubscriberEdit,salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number,
            phone_country_code, email_id,address_ref_name,address_line1,address_line2,address_area,address_city,address_state,address_country,address_zipcode_pincode,orsa_id,org_id,sm_memb_id
        );
        console.log("SubscriberEditData",SubscriberEditData)
	    if (SubscriberEditData.status=== "subscribers-upadted-successfully") {
          yield put(EditSubscriberSucess(SubscriberEditData))
          yield put(SubscribersListService(page_number,number_of_records));
	    }else {
          yield put(SubscribersListService(page_number,number_of_records));
        }
        yield put(fetchSuccess());
    } catch (error) {
	}
}

//   Watcher Saga

export function* EditSubscriberRootSaga() {
	yield takeEvery(EDIT_SUBSCRIBER, EditSubscriberService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(EditSubscriberRootSaga),
        ]
    );
}
