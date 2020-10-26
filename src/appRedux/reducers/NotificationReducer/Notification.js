import {
  NOTIFICATION_GET_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  SubscriberListData: [],
 
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case NOTIFICATION_GET_LIST_SUCCESS: {
      console.log("NOTIFICATION_GET_LIST_SUCCESS",action.data)
      return {
        ...state,
        SubscriberListData: action.data,
      };
    }

    default:
      return state;
  }
}