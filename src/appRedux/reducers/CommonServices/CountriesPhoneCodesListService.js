import {
  COUNTRIES_PHONECODES_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  CountriesPhoneCodesListServiceDataList: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case COUNTRIES_PHONECODES_LIST_SUCCESS: {
      return {
        ...state,
        CountriesPhoneCodesListServiceDataList: action.data,
      };
    }

    default:
      return state;
  }
}