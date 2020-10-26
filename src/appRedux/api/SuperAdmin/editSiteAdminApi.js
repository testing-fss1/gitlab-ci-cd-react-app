import axiosInstance from '../../../util/Api';

export const siteAdminEditRequest = async(salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number, phone_country_code, email_id, sm_memb_id) => 
	await axiosInstance.post('site/admin-edit', {
		sm_memb_id: sm_memb_id || '', 
		salutation: salutation || '',
		firstname: firstname || '',
		middlename: middlename || '',
		lastname: lastname || '',
		mobile_country_code: mobile_country_code || '',
		mobile_number: mobile_number || '',
		phone_number: phone_number || '',
		phone_country_code: phone_country_code || '',
		email_id: email_id || '',
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
