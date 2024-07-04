import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.BACKEND_DOMAIN,
});

request.interceptors.request.use(function (config) {
  return import('next/headers').then(({ cookies }) => {
    const cookie = cookies().get('access_token');

    if (!cookie?.value) return config;

    config.headers.Authorization = `Bearer ${cookie.value}`;

    return config;
  });
});

export default { request };
