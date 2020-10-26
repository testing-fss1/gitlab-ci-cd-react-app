import axiosInstance from '../../../util/Api';

export const CountryListServiceRequest = async() => 
	await axiosInstance.post('countries/list', {
		country_status: "",
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
