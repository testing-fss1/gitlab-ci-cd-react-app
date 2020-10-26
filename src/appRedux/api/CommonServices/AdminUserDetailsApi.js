import axiosInstance from '../../../util/Api';

export const adminUserDetailsRequest = async(values) => 
	await axiosInstance.post('admin-user-details/get', {
		user_id: values,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
