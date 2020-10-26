import axiosInstance from "util/Api";

export const RemoveSubsciberFromGroupServiceApi = async (data,orng_id) =>  
await  axiosInstance.post('multi-subscriber-mapped/remove', {
    subscribers:data,
    orng_id:orng_id,
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});