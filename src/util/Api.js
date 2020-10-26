import axios from 'axios';

const urlPath = window.location.href;

const axiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

axiosInstance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		const status = error.status || error.response.status;
		if (status === 401) {
			//dispatch action logout
			if( JSON.parse(localStorage.getItem('token')) ) {
				localStorage.removeItem('token');
				localStorage.removeItem('user_identifier');
				localStorage.removeItem('user_data');
				window.location.reload();        
			}
		}
		return Promise.reject(error)
	}
)

if (urlPath.includes('https://app.aznotify.com/')) {
  axiosInstance.defaults.baseURL = 'https://api-live.aznotify.com/rest/';
} else if (urlPath.includes('https://dev.aznotify.com/')) {
	axiosInstance.defaults.baseURL = 'https://api-dev.aznotify.com/rest/';
} else if (urlPath.includes('http://localhost:3000')) {
  axiosInstance.defaults.baseURL = 'https://api-dev.aznotify.com/rest/';
}

export default axiosInstance;