import {
	COUNTRY_LIST,
	COUNTRY_LIST_SUCCESS,
} from "../../../constants/ActionTypes";

export const CountryListService = () => {
  return {
    type: COUNTRY_LIST,
  }
};

export const CountryListServiceSuccess = (data) => {
  return {
    type: COUNTRY_LIST_SUCCESS,
    data : data.data,
  }
};