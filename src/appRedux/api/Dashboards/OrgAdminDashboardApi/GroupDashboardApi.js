import axiosInstance from '../../../../util/Api';


export const groupDashboardListService = async (page_number) => 
    await axiosInstance.post('organisation-groups/list', {
        org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        number_of_records:  "10",
        page_number:  page_number || '1',
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        return data
    })
    .catch(error => error);


