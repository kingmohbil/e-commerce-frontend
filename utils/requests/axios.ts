import axios from 'axios';

const request = axios.create({
  baseURL: Bun.env.BACKEND_DOMAIN,
});

export default request;
