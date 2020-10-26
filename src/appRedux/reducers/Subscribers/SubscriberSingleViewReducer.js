import {
    SUBSCRIBE_SINGLE_VIEW_LIST_SUCCESS,
    ADMIN_USER_DETAILS_GET_SUCCESS,
    CHANGE_SUBSCRIBER_GET_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    SubscriberSingleViewdata : [],
    SubscriberSingleViewStatus : '',
    SubscriberSingleViewStatusDescription : '',
    AdminUserDetailsdata :[],
    AdminUserDetailsStatus:'',
    subscriberchangeddata : []


  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case SUBSCRIBE_SINGLE_VIEW_LIST_SUCCESS: {
        console.log("SUBSCRIBE_SINGLE_VIEW_LIST_SUCCESS",action.data.data)
        return {
          ...state,
          SubscriberSingleViewdata : action.data.data,
          SubscriberSingleViewStatus: action.status,
          SubscriberSingleViewStatusDescription: action.statusDescription
        };
      }

      case ADMIN_USER_DETAILS_GET_SUCCESS: {
        console.log("ADMIN_USER_DETAILS_GET_SUCCESS",action.data)
        return {
          ...state,
          AdminUserDetailsdata : action.data,
          AdminUserDetailsStatus: action.status,
        };
      }

      case CHANGE_SUBSCRIBER_GET_SUCCESS: {
        console.log("pledsdddd",action.data)
        return {
          ...state,
          subscriberchangeddata : action.data,
          ubscriberchanged: action.status,
        };
      }
  
      default:
        return state;
    }
  }