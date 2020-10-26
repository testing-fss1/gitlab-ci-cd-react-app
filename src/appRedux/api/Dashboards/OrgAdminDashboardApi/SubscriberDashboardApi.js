import axiosInstance from '../../../../util/Api';


export const subscriberDashboardListService = async (page_number) => 
    await axiosInstance.post('org-admin-dashboard-users/list', {
        org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        number_of_records:  "10",
        page_number:  page_number || '1',
        user_classification: '7f6b1742-92c8-486b-8007-41f419f6fe93',
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        return data
    })
    .catch(error => error);


