import {
    SUBSCRIBE_LIST_DATA_SUCCESS,
    SUBSCRIBE_LIST_UPDATE_DATA_SUCCESS
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    SubscribeListData : [],
    SubscribeListDataStatus : '',
    SubscribeListDataStatusDescription : '',
    SubscribeUpdateListData : [],
    SubscribeUpdateListDataStatus: '',
    SubscribeUpdateListDataStatusDescription: '',
    SubscribeListtotal_count:''
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
  
      case SUBSCRIBE_LIST_DATA_SUCCESS: {
        console.log('SUBSCRIBE_LIST_DATA_SUCCESS IN Reducer:  ', action);
        
        return {
          ...state,
          SubscribeListData : action.data,
          SubscribeListtotal_count:action.total_count,
          SubscribeListDataStatus: action.status,
          SubscribeListDataStatusDescription: action.status_description
        };
      }
  
      case SUBSCRIBE_LIST_UPDATE_DATA_SUCCESS: {
        return {
          ...state,
          SubscribeUpdateListData : action.data,
          SubscribeUpdateListDataStatus: action.status,
          SubscribeUpdateListDataStatusDescription: action.status_description
        };
      }
  
      default:
        return state;
    }
  }