import axiosInstance from "util/Api";

export const GroupsListServiceApi = async (page_number,number_of_records) =>  
await  axiosInstance.post('organisation-groups/list', {
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
    page_number:page_number||'',
    number_of_records:number_of_records||''
})
.then(data => data)
.catch(error => {
    return error.response;
});