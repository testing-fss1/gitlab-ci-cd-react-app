import axiosInstance from '../../../util/Api';

export const SubscribersListServiceApi = async(page_number,number_of_records) => 
	await axiosInstance.post('subscribers/list', {
		page_number :page_number ||'',
		number_of_records :number_of_records ||'',
		org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
