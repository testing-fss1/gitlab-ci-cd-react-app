import {
  COUNTRY_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  CountriesListServiceDataList: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case COUNTRY_LIST_SUCCESS: {
      return {
        ...state,
        CountriesListServiceDataList: action.data,
      };
    }

    default:
      return state;
  }
}