import {
	SUBSCRIBE_SINGLE_VIEW_LIST,
    SUBSCRIBE_SINGLE_VIEW_LIST_SUCCESS,
    ADMIN_USER_DETAILS_GET,
    ADMIN_USER_DETAILS_GET_SUCCESS,
} from "../../../constants/ActionTypes";

export const SubscriberSingleViewListService = (org_id,sm_memb_id,page_number) => {
    console.log('subscriberslistservice')
  return {
    type: SUBSCRIBE_SINGLE_VIEW_LIST,
    org_id : org_id,
    sm_memb_id : sm_memb_id,
    page_number :page_number,
  }
};

export const AdminUserDetailsGet =  (org_id,sm_memb_id) =>{
    console.log('AdminUserDetailsGet')
return{
        type: ADMIN_USER_DETAILS_GET,
        org_id : org_id,
        sm_memb_id : sm_memb_id
    
}
}

export const SubscriberSingleViewListServiceSuccess = (data) => {
  return {
    type: SUBSCRIBE_SINGLE_VIEW_LIST_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};

export const AdminUserDetailsGetServiceSuccess = (data) => {
  return {
    type: ADMIN_USER_DETAILS_GET_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};