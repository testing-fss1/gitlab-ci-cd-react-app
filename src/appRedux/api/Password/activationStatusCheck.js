import axiosInstance from '../../../util/Api';

export const activationStatusCodeRequest = async(password_request_code) => 
	await axiosInstance.post('password/setup-request-ref-code-status/check/process', {
		password_request_code: password_request_code || '',
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
		return data;
    })
   	.catch(error =>{
    });

export const registerPswDetailsRequest = async(password_request_code, password, password_confirmation) => 
	await axiosInstance.post('register-password', {
		password_request_code: password_request_code || '',
		password: password || '',
		password_confirmation: password_confirmation || '',
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
		return data;
    })
   	.catch(error =>{
    });