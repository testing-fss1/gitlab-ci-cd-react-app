import axiosInstance from "util/Api";

export const SubscribeListApiCall = async (orng_id,page_number,number_of_records,status) =>  
await  axiosInstance.post('group-specific/subscribers/list', {
    orng_id:orng_id,
    page_number:page_number||'',
    number_of_records:number_of_records||'',
    status:status||'',
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});

export const SubscribeListUpdateApiCall = async (subscribers, orng_id) =>  
await  axiosInstance.post('multi-subscriber-mapped/add', {
    orng_id:orng_id,
    subscribers:subscribers,
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});