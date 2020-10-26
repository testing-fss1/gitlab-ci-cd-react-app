import axiosInstance from '../../../../util/Api';


export const orgEmployeeDashboardService = async (page_number) => 
    await axiosInstance.post('org-admin-dashboard-users/list', {
        org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        number_of_records:  "10",
        page_number:  page_number || '1',
        user_classification: '5c1d9533-26c3-49a8-be8f-43940b0b6100',
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        return data
    })
    .catch(error => error);

