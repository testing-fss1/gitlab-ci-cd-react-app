import axiosInstance from '../../../util/Api';

export const orgAdminEditRequest = async(salutation,firstname,middlename,lastname,organization_name,mobile_number,mobile_country_code,phone_number,phone_country_code,email_id,billing_address_line1,billing_address_line2,billing_address_city,billing_address_state,billing_address_country,billing_address_zipcode,sm_memb_id, org_id) => 
	await axiosInstance.post('org/admin-edit', {
		org_id: org_id,
		user_id: sm_memb_id, 
		salutation: salutation || '',
		firstname: firstname || '',
		middlename: middlename || '',
		lastname: lastname || '',
		organization_name: organization_name || '',
		mobile_number: mobile_number || '',
		mobile_country_code: mobile_country_code || '',
		phone_number: phone_number || '',
		phone_country_code: phone_country_code || '',
		email_id: email_id || '',
		billing_address_line1: billing_address_line1 || '',
		billing_address_line2: billing_address_line2 || '',
		billing_address_city: billing_address_city || '',
		billing_address_state: billing_address_state || '',
		billing_address_country: billing_address_country || '',
		billing_address_zipcode: billing_address_zipcode || '',
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
