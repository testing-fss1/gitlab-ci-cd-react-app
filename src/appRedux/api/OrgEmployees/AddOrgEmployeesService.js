import axiosInstance from '../../../util/Api';

export const AddOrgEmployeesService = async(salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_country_code, phone_number, email_id) => 
	await axiosInstance.post('org-employee/add', {
		salutation: salutation || "",
		firstname: firstname,
		middlename: middlename || "",
		lastname: lastname,
		mobile_country_code: mobile_country_code,
		mobile_number: mobile_number,
		phone_number: phone_number || "",
		phone_country_code: phone_country_code,
		email_id: email_id,
		org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
