import axiosInstance from '../../../../util/Api';

export const UniqueMobileCodeVerifyServiceApi = async(unique_code_verification, sm_memb_id, column_name) => 
	await axiosInstance.post('request-mobile-or-phone/change', {
		sm_memb_id: sm_memb_id,
		column_name: column_name,
		verification_number: unique_code_verification,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
