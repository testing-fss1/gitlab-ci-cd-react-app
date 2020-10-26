import axiosInstance from '../../../util/Api';

export const CountriesPhoneCodesListService = async() => 
	await axiosInstance.post('countries-phonecodes/list', {
		phonecode_status: "",
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
