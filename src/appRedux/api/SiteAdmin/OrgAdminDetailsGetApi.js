import axiosInstance from '../../../util/Api';

export const orgAdminUserDetailsRequest = async(values) => 
	await axiosInstance.post('org/admin-get', {
		user_id: values,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
        console.log('aadfsdfsfdfgdfgd : ', values);
    })
   	.catch(error =>{
    });
