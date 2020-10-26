import axiosInstance from '../../../../util/Api';


export const orgAdminDashboardListService = async (page_number) => 
    await axiosInstance.post('site-members-dashboard-admin-users/list', {
        number_of_records:  "10",
        page_number:  page_number || '1',
        user_classification: '48e8179f-d45c-4297-9e29-f36033c6cb74',
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        console.log("houy",data);
        return data
    })
    .catch(error => error);

