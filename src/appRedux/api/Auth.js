import axiosInstance from '../../util/Api'; 


export const ipAddressGet = async () => 
    fetch('https://api.geoinfo.ws/rest/client-ip-address/with-geo-info/collect', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(
      (response) => {
        return localStorage.setItem("ip_address", JSON.stringify(response.data.ip));
      },
      (error) => {
        return error.message 
      }
    )


export const signInUserWithEmailPasswordRequest = async (userIdentifier,password) => 
    await axiosInstance.post('login', {
            user_identifier: userIdentifier,
            password: password,
            ip_address: JSON.parse(localStorage.getItem('ip_address'))
        }
    )
    .then(data => {
        localStorage.setItem("user_identifier", JSON.stringify(userIdentifier));
        return data
    })
    .catch(error => {
        return error.response
    });


export const userDetailsGetRequest = async () => 
    await axiosInstance.post('user-details/get', {
            user_identifier: JSON.parse(localStorage.getItem('user_identifier')),
            ip_address: JSON.parse(localStorage.getItem('ip_address'))
        }
    )
    .then(userdata => {
        return userdata;
    })
    .catch(error =>{
    });


export const signOutRequest = async (logout_request_type) => 
    await axiosInstance.post('logout', {
            user_id: JSON.parse(localStorage.getItem('user_data')).sm_memb_id,
            logout_request_type: logout_request_type,
            ip_address: JSON.parse(localStorage.getItem('ip_address'))
        }
    )
    .then(userdata => {
        return userdata;
    })
    .catch(error =>{
    });

