import axiosInstance from "util/Api";

export const notificationApi = async () =>  
await  axiosInstance.post('notifications/list', {
  	user_id: JSON.parse(localStorage.getItem('user_data')).sm_memb_id || "",
  	org_id: JSON.parse(localStorage.getItem('user_data')).org_id || "",
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});