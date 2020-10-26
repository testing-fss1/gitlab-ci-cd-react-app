import {
	COUNTRIES_PHONECODES_LIST,
	COUNTRIES_PHONECODES_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const CountriesPhoneCodesListService = () => {
  return {
    type: COUNTRIES_PHONECODES_LIST,
  }
};

export const CountriesPhoneCodesListServiceSuccess = (data) => {
  return {
    type: COUNTRIES_PHONECODES_LIST_SUCCESS,
    data : data.data,
  }
};