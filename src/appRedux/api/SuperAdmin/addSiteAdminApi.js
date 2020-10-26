import axiosInstance from '../../../util/Api';

export const siteAdminAddRequest = async(salutation, firstname, middlename, lastname, email_id) => 
	await axiosInstance.post('site/admin-add', {
		salutation: salutation,
		firstname: firstname || '',
		middlename: middlename || '',
		lastname: lastname || '',
		email_id: email_id || '',
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
