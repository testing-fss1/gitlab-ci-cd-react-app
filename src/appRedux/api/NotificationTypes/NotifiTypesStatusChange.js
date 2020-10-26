import axiosInstance from '../../../util/Api';

export const NotifiTypesStatusChange = async(value, ornt_id) => 
	await axiosInstance.post('org-rel-notification/types-status/change', {
		ornt_id: ornt_id,
		status: value,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
