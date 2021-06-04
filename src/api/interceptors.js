import axios from 'axios';
import { withRouter } from 'react-router-dom';

const baseUrl = 'https://crm-api-stage.sharebucks.io/api/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use((request) => {
  let token = localStorage.getItem('token');
  if (token) {
    token = token || '';
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default withRouter(axiosInstance);
